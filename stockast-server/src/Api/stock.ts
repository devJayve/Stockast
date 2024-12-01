import WebSocket from "ws";
import { RequestHandler } from "express";
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import { StockOutput } from "../types/stocks";
import tokenService from "../services/tokenService";

const getStockPrice: RequestHandler = async (req, res, next) => {
  try {
    const { stockCode } = req.params as { stockCode: string };

    if (!stockCode || stockCode.length !== 6) {
      res.status(400).json({ message: "Invalid stock code." });
      return;
    }

    const response = await fetchStockPrice(stockCode);

    const item = response.output;

    const processedData = {
      stockStatus: item.iscd_stat_cls_code,
      marginRate: item.marg_rate,
      marketName: item.rprs_mrkt_kor_name,
      currentPrice: parseInt(item.stck_prpr, 10),
      yesterdayVs: parseInt(item.prdy_vrss, 10),
      yesterdayVsSign: item.prdy_vrss_sign,
      yesterdayVsRate: parseFloat(item.prdy_ctrt),
    };

    res.status(200).json({
      success: true,
      data: processedData,
    });
  } catch (error) {
    next(error);
  }
};

const fetchStockPrice = async (stockCode: string) => {
  const endpoint = "/uapi/domestic-stock/v1/quotations/inquire-price";

  try {
    const accessToken = await tokenService.getAccessToken();

    const additionalHeaders = {
      tr_id: "FHKST01010100", // 주식 현재가 시세
      Authorization: `Bearer ${accessToken}`,
    };

    const response = await axiosInstance.get(endpoint, {
      params: {
        FID_COND_MRKT_DIV_CODE: "J", // 주식, ETF, ETN
        FID_INPUT_ISCD: stockCode, // 6자리 종목 코드
      },
      headers: {
        ...additionalHeaders,
      },
    });

    console.log(`fetchStockPrice response: ${JSON.stringify(response.data)}`);

    if (response.data.rt_cd !== "0") {
      throw new Error(`API Error: ${response.data.msg1}`);
    }

    return response.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(
      error.message || "주식 시세 데이터를 가져오는데 실패했습니다."
    );
  }
};

export { getStockPrice };

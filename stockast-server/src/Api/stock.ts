import { RequestHandler } from "express";
import { fetchStockPrice } from "./kis/stock";

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



export { getStockPrice };

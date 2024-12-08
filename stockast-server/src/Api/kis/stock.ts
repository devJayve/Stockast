import tokenService from "../../services/tokenService";
import axiosInstance from "../../utils/axiosInstance";

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

export { fetchStockPrice };

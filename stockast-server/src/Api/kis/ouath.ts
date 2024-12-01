import { CONFIG } from "../../config/config";
import axiosInstance from "../../utils/axiosInstance";
import { KisTokenResponse } from "../../types/kisToken";

// 접근 토큰 발급
export const getAccessTokenFromKis = async (): Promise<KisTokenResponse> => {
  try {
    const response = await axiosInstance.post("/oauth2/tokenP", {
      grant_type: "client_credentials",
      appkey: `${CONFIG.KIS_APP_KEY}`,
      appsecret: `${CONFIG.KIS_APP_SECRET}`,
    });

    return response.data;
  } catch (error) {
    console.error(`getAccessTokenFromKis error: ${error}`);
    throw new Error("Failed to fetch access token");
  }
};

// const {
//     MOCK_INVEST_APP_KEY,
//     MOCK_INVEST_SECRET_KEY,
//     MOCK_INVEST_SOCKET_BASE_URL,
//   } = process.env;
//   let approvalKey: string | null = null;

// // KIS WebSocket 접속을 위한 승인키 발급
// const getApprovalKey = async (): Promise<string | null> => {
//     if (approvalKey) return approvalKey;

//     try {
//       const response = await axios.post(
//         MOCK_INVEST_SOCKET_BASE_URL as string,
//         {
//           grant_type: "client_credentials",
//           appKey: MOCK_INVEST_APP_KEY,
//           appSecret: MOCK_INVEST_SECRET_KEY,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json; charset=utf-8",
//           },
//         }
//       );

//       approvalKey = response.data.approval_key;
//       console.log("approvalKey", approvalKey);
//       return approvalKey;
//     } catch (error) {
//       console.error(error);
//       return null;
//     }
//   };

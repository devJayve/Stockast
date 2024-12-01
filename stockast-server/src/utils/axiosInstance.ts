import axios from "axios";
import { CONFIG } from "../config/config";

const axiosInstance = axios.create({
  baseURL: CONFIG.KIS_API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    appKey: CONFIG.KIS_APP_KEY,
    appSecret: CONFIG.KIS_APP_SECRET,
  },
});

export default axiosInstance;

import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  PORT: process.env.PORT || 3000,
  KIS_APP_KEY: process.env.KIS_PROD_APP_KEY || "",
  KIS_APP_SECRET: process.env.KIS_PROD_APP_SECRET || "",
  KIS_API_URL: process.env.KIS_PROD_API_URL || "",
  KIS_WS_URL: process.env.KIS_PROD_WS_URL || "",
};

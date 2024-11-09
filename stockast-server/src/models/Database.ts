import mysql, { Pool, PoolConnection } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const conn: Pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DATABASE!,
  waitForConnections: true,
  connectTimeout: 10000,
});

const getConnection = async (): Promise<PoolConnection | null> => {
  try {
    return await conn.getConnection();
  } catch (error) {
    console.error(`connection error: ${(error as Error).message}`);
    return null;
  }
};

export { getConnection };

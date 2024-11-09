const mysql = require("mysql2/promise");
require("dotenv").config();

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectTimeout: 10,
  queryFormat: 0,
});

const getConnection = async () => {
  //connection 생성
  try {
    return await conn.getConnection();
  } catch (error) {
    console.error(`connection error : ${error.message}`);
    return null;
  }
};

module.exports = { conn, getConnection };

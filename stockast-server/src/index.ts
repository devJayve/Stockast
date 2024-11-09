import express from "express";
import cors from "cors";
import path from "path";
import admin from "firebase-admin";
import dotenv from "dotenv";
import usersRouter from "./routes/userRouter";

dotenv.config();

// 환경 변수 타입 정의
const serviceAccountPath = process.env.SERVICE_ACCOUNT_PATH;
const port = process.env.PORT;

// 환경 변수 검증
if (!serviceAccountPath) {
  throw new Error(
    "SERVICE_ACCOUNT_PATH is not defined in environment variables",
  );
}
if (!port) {
  throw new Error("PORT is not defined in environment variables");
}

// 파이어베이스 등록
const serviceAccount = require(path.resolve(serviceAccountPath));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// 미들웨어 등록
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// 라우터 등록
app.use("/user", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

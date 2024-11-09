const express = require("express");
const cors = require("cors");
const path = require("path");
const admin = require("firebase-admin");
require("dotenv").config();

// 파이어베이스 등록
const serviceAccount = require(path.resolve(process.env.SERVICE_ACCOUNT_PATH));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 미들웨어 등록
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

// 라우터 등록
const usersRouter = require("./routes/users");
app.use("/user", usersRouter);

app.listen(process.env.PORT, () => {
  console.log(`listen`);
});

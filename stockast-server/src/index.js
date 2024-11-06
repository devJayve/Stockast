const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const serviceAccount = require(process.env.SERVICE_ACCOUNT_PATH);
const admin = require("firebase-admin");
require('dotenv').config();

const app = express();
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const connection = mysql.createConnection({
   host : process.env.DB_HOST,
});

const usersRouter = require('./routes/users');

app.use('/user', usersRouter);

// 미들웨어 등록
app.use(express.static('public'))
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`listen`);
});




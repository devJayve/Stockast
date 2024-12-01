import express, { Router } from "express";
import { getStockPrice } from "../Api/stock";

const router: Router = express.Router();

router.get("/price/:stockCode", getStockPrice);

export default router;

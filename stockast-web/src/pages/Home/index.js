"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StockIndexList_1 = __importDefault(require("./StockIndexList"));
const StockChart_1 = __importDefault(require("./StockChart"));
const LineGraph_1 = __importDefault(require("../../components/Graph/LineGraph"));
function Home() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)(StockIndexList_1.default, {}), (0, jsx_runtime_1.jsx)(LineGraph_1.default, {}), (0, jsx_runtime_1.jsx)(StockChart_1.default, {})] }));
}
exports.default = Home;

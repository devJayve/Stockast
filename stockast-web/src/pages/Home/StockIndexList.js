"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StockIndex_1 = __importDefault(require("./StockIndex"));
const dummyList = [
    {
        title: '코스피',
        indexPrice: '2542.36',
        imageUrl: '/images/korea_flag.png',
        changePrice: '-13.79',
        changeRate: '0.5',
    },
    {
        title: '코스피',
        indexPrice: '2542.36',
        imageUrl: '/images/korea_flag.png',
        changePrice: '-13.79',
        changeRate: '0.5',
    },
    {
        title: '코스피',
        indexPrice: '2542.36',
        imageUrl: '/images/korea_flag.png',
        changePrice: '-13.79',
        changeRate: '0.5',
    },
    {
        title: '코스피',
        indexPrice: '2542.36',
        imageUrl: '/images/korea_flag.png',
        changePrice: '-13.79',
        changeRate: '0.5',
    },
];
const StockIndexList = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'mb-10 mt-10', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-2xl', children: "\uC8FC\uAC00 \uC9C0\uC218" }), (0, jsx_runtime_1.jsx)("div", { className: 'scrollbar-hide flex space-x-4 overflow-x-auto whitespace-nowrap', children: dummyList.map((stock, index) => ((0, jsx_runtime_1.jsx)(StockIndex_1.default, { title: stock.title, imageUrl: stock.imageUrl, indexPrice: stock.indexPrice, changePrice: stock.changePrice, changeRate: stock.changeRate }, index))) })] }));
};
exports.default = StockIndexList;

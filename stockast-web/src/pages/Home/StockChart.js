"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./../../styles/table.css");
const dummyData = [
    {
        stock: '삼성전자',
        currentPrice: 70000,
        changeRate: '+1.25%',
        tradingValue: '2조 3000억',
        tradingVolume: '1,200,000',
    },
    {
        stock: '카카오',
        currentPrice: 120000,
        changeRate: '-0.85%',
        tradingValue: '1조 5000억',
        tradingVolume: '900,000',
    },
    {
        stock: '네이버',
        currentPrice: 300000,
        changeRate: '+0.45%',
        tradingValue: '7000억',
        tradingVolume: '450,000',
    },
    {
        stock: '현대차',
        currentPrice: 250000,
        changeRate: '+2.10%',
        tradingValue: '1조 2000억',
        tradingVolume: '600,000',
    },
    {
        stock: 'LG화학',
        currentPrice: 800000,
        changeRate: '-1.50%',
        tradingValue: '9000억',
        tradingVolume: '300,000',
    },
];
const StockChart = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'p-5', children: [(0, jsx_runtime_1.jsx)("p", { className: 'my-2 text-xl font-semibold', children: "\uC2E4\uC2DC\uAC04 \uCC28\uD2B8" }), (0, jsx_runtime_1.jsxs)("table", { className: 'w-full', children: [(0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { className: 'table-header', children: [(0, jsx_runtime_1.jsx)("th", { className: 'w-[30%] py-2 text-left', children: "\uC885\uBAA9" }), (0, jsx_runtime_1.jsx)("th", { className: 'w-[20%]', children: "\uD604\uC7AC\uAC00" }), (0, jsx_runtime_1.jsx)("th", { className: 'w-[20%]', children: "\uB4F1\uB77D\uB960" }), (0, jsx_runtime_1.jsx)("th", { className: 'w-[15%]', children: "\uAC70\uB798\uB300\uAE08" }), (0, jsx_runtime_1.jsx)("th", { className: 'w-[15%]', children: "\uAC70\uB798\uB7C9" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: dummyData.map((record, index) => ((0, jsx_runtime_1.jsxs)("tr", { className: 'text-right', children: [(0, jsx_runtime_1.jsxs)("td", { className: 'flex py-2 text-left', children: [(0, jsx_runtime_1.jsx)("img", { className: 'mx-2 rounded-full object-cover object-center', src: '/images/samsung_icon.png', width: '15px' }), (0, jsx_runtime_1.jsx)("p", { children: record.stock })] }), (0, jsx_runtime_1.jsx)("td", { children: record.currentPrice }), (0, jsx_runtime_1.jsx)("td", { children: record.changeRate }), (0, jsx_runtime_1.jsx)("td", { children: record.tradingValue }), (0, jsx_runtime_1.jsx)("td", { children: record.tradingVolume })] }, index))) })] })] }));
};
exports.default = StockChart;

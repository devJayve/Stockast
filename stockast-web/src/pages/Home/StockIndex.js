"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StockIndex = ({ title, imageUrl, indexPrice, changePrice, changeRate, }) => {
    const isPositive = parseFloat(changePrice) > 0;
    const rateColor = isPositive ? 'text-red-500' : 'text-blue-500';
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'inline-block w-[200px] flex-shrink-0 flex-col rounded-xl bg-neutral-800 p-5', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-1', children: [(0, jsx_runtime_1.jsx)("p", { children: title }), (0, jsx_runtime_1.jsx)("img", { className: 'h-4 w-auto', src: imageUrl, alt: title })] }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xl font-bold', children: indexPrice }), (0, jsx_runtime_1.jsxs)("p", { className: rateColor, children: [changePrice, " (", changeRate, "%)"] })] }));
};
exports.default = StockIndex;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const InvestmentList = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'my-8 flex w-full space-x-5', children: [(0, jsx_runtime_1.jsxs)("ul", { className: 'flex-1', children: [(0, jsx_runtime_1.jsx)(InvestmentTile, {}), (0, jsx_runtime_1.jsx)(InvestmentTile, {}), (0, jsx_runtime_1.jsx)(InvestmentTile, {}), (0, jsx_runtime_1.jsx)(InvestmentTile, {})] }), (0, jsx_runtime_1.jsxs)("ul", { className: 'flex-1', children: [(0, jsx_runtime_1.jsx)(InvestmentTile, {}), (0, jsx_runtime_1.jsx)(InvestmentTile, {}), (0, jsx_runtime_1.jsx)(InvestmentTile, {})] })] }));
};
const InvestmentTile = () => {
    const stockId = '123';
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/stocks/${stockId}`, children: (0, jsx_runtime_1.jsxs)("li", { className: 'flex cursor-pointer justify-between py-1', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-2', children: [(0, jsx_runtime_1.jsx)("img", { className: 'h-8 w-8 rounded-full', src: '/images/samsung_icon.png' }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uC0BC\uC131\uC804\uC790" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xs text-neutral-400', children: "10\uC8FC" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'justify-items-end', children: [(0, jsx_runtime_1.jsx)("p", { className: 'font-semibold', children: "800,000\uC6D0" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-red-500', children: "+80,000(10.0%)" })] })] }) }));
};
exports.default = InvestmentList;

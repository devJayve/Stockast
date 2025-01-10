"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InvestedBalance = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'my-8', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-neutral-200', children: "\uD22C\uC790 \uC911\uC778 \uAE08\uC561" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-baseline space-x-1', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-lg font-semibold', children: "1,000,000\uC6D0" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-red-500', children: "(10.0%)" })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex w-full', children: [(0, jsx_runtime_1.jsx)(BalanceCard, {}), (0, jsx_runtime_1.jsx)(BalanceCard, {})] })] }));
};
const BalanceCard = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'm-1 w-full rounded-xl bg-neutral-800 p-3', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-1', children: [(0, jsx_runtime_1.jsx)("img", { src: '/images/korea_flag.png', width: '10px' }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm', children: "\uAD6D\uB0B4\uC8FC\uC2DD" })] }), (0, jsx_runtime_1.jsx)("p", { className: 'my-1 font-medium', children: "6,971\uC6D0" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-1 text-sm text-red-500', children: [(0, jsx_runtime_1.jsx)("p", { children: "+100,000\uC6D0" }), (0, jsx_runtime_1.jsx)("p", { children: "(45.2%)" })] })] }));
};
exports.default = InvestedBalance;

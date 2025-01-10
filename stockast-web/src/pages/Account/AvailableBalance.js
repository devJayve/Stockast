"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const go_1 = require("react-icons/go");
const pi_1 = require("react-icons/pi");
const AvailableBalance = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'my-8', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-neutral-200', children: "\uC8FC\uBB38\uAC00\uB2A5\uAE08\uC561" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-lg font-semibold', children: "1,000,000\uC6D0" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex w-full', children: [(0, jsx_runtime_1.jsx)(BalanceCard, {}), (0, jsx_runtime_1.jsx)(BalanceCard, {})] })] }));
};
const BalanceCard = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'm-1 w-full rounded-xl bg-neutral-800 p-3', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-0.5', children: [(0, jsx_runtime_1.jsx)(pi_1.PiCurrencyKrwFill, {}), (0, jsx_runtime_1.jsx)("p", { children: "\uC6D0\uD654" })] }), (0, jsx_runtime_1.jsx)("p", { className: 'my-1 font-medium', children: "6,971\uC6D0" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center space-x-1', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-sm font-light text-neutral-300', children: "6,971\uC6D0 \uCD9C\uAE08 \uAC00\uB2A5" }), (0, jsx_runtime_1.jsx)(go_1.GoQuestion, { className: 'text-neutral-300' })] })] }));
};
exports.default = AvailableBalance;

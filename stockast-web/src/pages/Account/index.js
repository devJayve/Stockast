"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AccountGraph_1 = __importDefault(require("./AccountGraph"));
const InvestedBalance_1 = __importDefault(require("./InvestedBalance"));
const AvailableBalance_1 = __importDefault(require("./AvailableBalance"));
const InvestmentList_1 = __importDefault(require("./InvestmentList"));
const Account = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'mx-8', children: [(0, jsx_runtime_1.jsx)(AccountGraph_1.default, {}), (0, jsx_runtime_1.jsx)(InvestmentList_1.default, {}), (0, jsx_runtime_1.jsx)(AvailableBalance_1.default, {}), (0, jsx_runtime_1.jsx)(InvestedBalance_1.default, {})] }));
};
exports.default = Account;

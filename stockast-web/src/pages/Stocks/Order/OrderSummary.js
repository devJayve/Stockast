"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InterfaceBlock_1 = __importDefault(require("../../../components/Blocks/InterfaceBlock"));
const formatUtils_1 = require("../../../utils/formatUtils");
const OrderSummary = ({ watch, availableAmount, }) => {
    const orderPrice = watch('orderPrice');
    const quantity = watch('quantity');
    const totalCost = orderPrice * quantity;
    return ((0, jsx_runtime_1.jsx)("table", { className: 'w-full', children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsx)(AvailableAmount, { availableAmount: availableAmount }), (0, jsx_runtime_1.jsx)(TotalOrderPrice, { totalCost: totalCost })] }) }));
};
const AvailableAmount = ({ availableAmount }) => {
    return ((0, jsx_runtime_1.jsx)(InterfaceBlock_1.default, { className: 'font-semibold', title: '\uAD6C\uB9E4\uAC00\uB2A5 \uAE08\uC561', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-right font-semibold', children: (0, formatUtils_1.formatCurrency)(availableAmount) }) }));
};
const TotalOrderPrice = ({ totalCost }) => {
    return ((0, jsx_runtime_1.jsx)(InterfaceBlock_1.default, { className: 'font-semibold', title: '\uCD1D \uC8FC\uBB38 \uAE08\uC561', children: (0, jsx_runtime_1.jsx)("p", { className: 'text-right font-semibold', children: (0, formatUtils_1.formatCurrency)(totalCost) }) }));
};
exports.default = OrderSummary;

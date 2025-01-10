"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const ValueDisplay = ({ value, originValue }) => {
    const difference = (value - originValue).toFixed(2);
    function formatDifference() {
        return parseFloat(difference) > 0 ? `+${difference}` : difference;
    }
    const changeRate = originValue !== 0 ? ((difference / originValue) * 100).toFixed(2) : '0';
    const getColor = () => {
        if (difference > 0)
            return 'text-red-500';
        if (difference < 0)
            return 'text-blue-500';
        return 'text-gray-500';
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('flex items-baseline justify-end space-x-1 font-medium', getColor()), children: [(0, jsx_runtime_1.jsx)("p", { children: formatDifference() }), (0, jsx_runtime_1.jsxs)("p", { children: ["(", changeRate, "%)"] })] }));
};
exports.default = ValueDisplay;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const clsx_1 = __importDefault(require("clsx"));
const InterfaceBlock = ({ title, children, className, }) => {
    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: (0, clsx_1.default)(className, 'w-[1%] whitespace-nowrap py-1.5 pr-2'), children: title }), (0, jsx_runtime_1.jsx)("td", { className: 'py-1.5', children: children })] }));
};
exports.default = InterfaceBlock;

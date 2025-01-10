"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const io_1 = require("react-icons/io");
const ValueDisplay_1 = __importDefault(require("../ValueDisplay/ValueDisplay"));
const InfoCardContext = (0, react_1.createContext)(null);
const useInfoCardContext = () => {
    const context = (0, react_1.useContext)(InfoCardContext);
    if (!context) {
        throw Error('useInfoCardContext');
    }
    return context;
};
const InfoCard = ({ children, value, originalValue, }) => {
    return ((0, jsx_runtime_1.jsx)(InfoCardContext.Provider, { value: { value, originalValue }, children: (0, jsx_runtime_1.jsx)("div", { className: 'relative flex space-x-2 rounded-xl bg-neutral-800 p-5', children: children }) }));
};
const Stat = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: 'flex min-h-16 flex-col', children: children });
};
const IndexContent = ({ label, iconUrl }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-full flex-col justify-between', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-baseline space-x-1', children: [(0, jsx_runtime_1.jsx)("span", { className: 'text-sm', children: label }), (0, jsx_runtime_1.jsx)("img", { className: 'h-2.5 w-auto', src: iconUrl })] }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xl font-semibold', children: "729.04" })] }));
};
const BalanceContent = ({ label, iconUrl }) => {
    const { value } = useInfoCardContext();
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-full flex-col justify-between', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex items-baseline space-x-1', children: [(0, jsx_runtime_1.jsx)("img", { className: 'h-2.5 w-auto', src: iconUrl }), (0, jsx_runtime_1.jsx)("span", { className: 'text-sm', children: label })] }), (0, jsx_runtime_1.jsxs)("p", { className: 'font-medium', children: [value, "\uC6D0"] })] }));
};
const ChangeRate = () => {
    const { value, originalValue } = useInfoCardContext();
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ValueDisplay_1.default, { value: value, originValue: originalValue }) }));
};
const Chart = () => {
    return (0, jsx_runtime_1.jsx)("div", { className: 'bg-white', children: "\uCC28\uD2B8" });
};
const Detail = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'absolute inset-0 z-10 flex cursor-pointer items-end justify-end rounded-xl p-3 text-white opacity-0 transition-opacity duration-300 hover:opacity-100', children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center', children: [(0, jsx_runtime_1.jsx)("span", { children: "\uC790\uC138\uD788 \uBCF4\uAE30" }), (0, jsx_runtime_1.jsx)(io_1.IoIosArrowForward, {})] }) }));
};
InfoCard.Stat = Stat;
InfoCard.IndexContent = IndexContent;
InfoCard.BalanceContent = BalanceContent;
InfoCard.ChangeRate = ChangeRate;
InfoCard.Chart = Chart;
InfoCard.Detail = Detail;
exports.default = InfoCard;

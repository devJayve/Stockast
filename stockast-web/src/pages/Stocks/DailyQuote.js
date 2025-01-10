"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TabBar_1 = __importDefault(require("../../components/TabBar"));
const MetricsTable_1 = __importDefault(require("../../components/MetricsTable"));
const realtimePriceDummy = [
    {
        tradePrice: '57,100원',
        tradeVolume: 14892,
        changeRate: '+0.17%',
        accumulatedVolume: 13564588,
    },
    {
        tradePrice: '58,000원',
        tradeVolume: 10345,
        changeRate: '-0.05%',
        accumulatedVolume: 12500000,
    },
    {
        tradePrice: '56,700원',
        tradeVolume: 20340,
        changeRate: '+0.25%',
        accumulatedVolume: 14500000,
    },
    {
        tradePrice: '57,500원',
        tradeVolume: 17980,
        changeRate: '-0.13%',
        accumulatedVolume: 12345678,
    },
];
const DailyQuote = () => {
    const [selectedTab, setSelectedTab] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-1 flex-col rounded-xl bg-neutral-800 p-4', children: [(0, jsx_runtime_1.jsx)("p", { className: 'font-semibold', children: "\uC77C\uBCC4 \uC2E4\uC2DC\uAC04 \uC2DC\uC138" }), (0, jsx_runtime_1.jsxs)(TabBar_1.default, { onTabChange: setSelectedTab, selectedTab: selectedTab, hasBackground: true, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 0, label: '\uC2E4\uC2DC\uAC04' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 1, label: '\uC2E4\uC2DC\uAC04' })] }), (0, jsx_runtime_1.jsxs)(MetricsTable_1.default, { children: [(0, jsx_runtime_1.jsxs)(MetricsTable_1.default.Header, { children: [(0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: "\uCCB4\uACB0\uAC00" }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: "\uCCB4\uACB0\uB7C9" }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: "\uB4F1\uB77D\uB960" }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: "\uAC70\uB798\uB7C9" })] }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Body, { children: realtimePriceDummy.map((price, index) => ((0, jsx_runtime_1.jsxs)(MetricsTable_1.default.Row, { children: [(0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: price.tradePrice }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: price.tradeVolume }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: price.changeRate }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: price.accumulatedVolume })] }, index))) })] })] }));
};
exports.default = DailyQuote;

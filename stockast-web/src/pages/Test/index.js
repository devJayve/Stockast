"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const TabBar_1 = __importDefault(require("../../components/TabBar"));
const InfoCard_1 = __importDefault(require("../../components/InfoCard"));
const MetricsTable_1 = __importDefault(require("../../components/MetricsTable"));
const dummyData_1 = require("./dummyData");
const ValueDisplay_1 = __importDefault(require("../../components/ValueDisplay/ValueDisplay"));
const formatUtils_1 = require("../../utils/formatUtils");
const Test = () => {
    const [circleTab, setCircleTab] = (0, react_1.useState)(0);
    const [underlineTab, setUnderlineTab] = (0, react_1.useState)(0);
    const [interfaceTab, setInterfaceTab] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col gap-4', children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Circle Tab Example" }), (0, jsx_runtime_1.jsxs)(TabBar_1.default, { selectedTab: circleTab, onTabChange: setCircleTab, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 0, label: 'Home' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 1, label: 'Profile' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 2, label: 'Settings' })] }), (0, jsx_runtime_1.jsx)("h2", { children: "Underline Tab Example" }), (0, jsx_runtime_1.jsxs)(TabBar_1.default, { selectedTab: underlineTab, onTabChange: setUnderlineTab, hasUnderline: true, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.UnderlineTab, { value: 0, label: 'Overview' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.UnderlineTab, { value: 1, label: 'Stats' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.UnderlineTab, { value: 2, label: 'Details' })] }), (0, jsx_runtime_1.jsx)("h2", { children: "Interface Tab Example" }), (0, jsx_runtime_1.jsxs)(TabBar_1.default, { selectedTab: interfaceTab, onTabChange: setInterfaceTab, hasBackground: true, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 0, label: 'Section 1' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 1, label: 'Section 2' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 2, label: 'Section 3', activeColor: 'bg-blue-500/30 text-blue-400 font-semibold' })] })] }), (0, jsx_runtime_1.jsx)("p", { children: "\uC8FC\uC2DD \uC9C0\uD45C \uCEF4\uD3EC\uB10C\uD2B8" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-2', children: [(0, jsx_runtime_1.jsxs)(InfoCard_1.default, { value: 729.04, originalValue: 724.38, children: [(0, jsx_runtime_1.jsxs)(InfoCard_1.default.Stat, { children: [(0, jsx_runtime_1.jsx)(InfoCard_1.default.IndexContent, { label: '\uCF54\uC2A4\uB2E5', iconUrl: '/images/korea_flag.png' }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.ChangeRate, {})] }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.Chart, {})] }), (0, jsx_runtime_1.jsxs)(InfoCard_1.default, { value: 729.04, originalValue: 729.04, children: [(0, jsx_runtime_1.jsxs)(InfoCard_1.default.Stat, { children: [(0, jsx_runtime_1.jsx)(InfoCard_1.default.IndexContent, { label: '\uCF54\uC2A4\uB2E5', iconUrl: '/images/korea_flag.png' }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.ChangeRate, {})] }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.Chart, {})] }), (0, jsx_runtime_1.jsxs)(InfoCard_1.default, { value: 729.04, originalValue: 734.38, children: [(0, jsx_runtime_1.jsxs)(InfoCard_1.default.Stat, { children: [(0, jsx_runtime_1.jsx)(InfoCard_1.default.IndexContent, { label: '\uCF54\uC2A4\uB2E5', iconUrl: '/images/korea_flag.png' }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.ChangeRate, {})] }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.Chart, {})] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uC8FC\uC2DD \uACC4\uC88C \uCEF4\uD3EC\uB10C\uD2B8" }), (0, jsx_runtime_1.jsxs)(InfoCard_1.default, { value: 729.04, originalValue: 734.38, children: [(0, jsx_runtime_1.jsxs)(InfoCard_1.default.Stat, { children: [(0, jsx_runtime_1.jsx)(InfoCard_1.default.BalanceContent, { label: '\uAD6D\uB0B4\uC8FC\uC2DD', iconUrl: '/images/korea_flag.png' }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.ChangeRate, {})] }), (0, jsx_runtime_1.jsx)(InfoCard_1.default.Detail, {})] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\uACC4\uC88C \uC794\uACE0 \uCEF4\uD3EC\uB10C\uD2B8" }), (0, jsx_runtime_1.jsx)(InfoCard_1.default, { value: 100000, originalValue: null, children: (0, jsx_runtime_1.jsx)(InfoCard_1.default.Stat, { children: (0, jsx_runtime_1.jsx)(InfoCard_1.default.BalanceContent, { label: '\uC6D0\uD654', iconUrl: '/images/korea_flag.png' }) }) })] }), (0, jsx_runtime_1.jsx)("p", { children: "\uD14C\uC774\uBE14 \uCEF4\uD3EC\uB10C\uD2B8" }), (0, jsx_runtime_1.jsxs)(MetricsTable_1.default, { children: [(0, jsx_runtime_1.jsxs)(MetricsTable_1.default.Header, { children: [(0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '일자' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '종가' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '등락률' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '거래량(주)' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '거래대금' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '시가' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '고가' }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Column, { children: '저가' })] }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Body, { children: dummyData_1.tableResponse.map((metric, index) => {
                            const dateString = metric.date.toLocaleDateString('ko-KR');
                            return ((0, jsx_runtime_1.jsxs)(MetricsTable_1.default.Row, { children: [(0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: dateString }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatCurrency)(metric.closePrice) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, jsx_runtime_1.jsx)(ValueDisplay_1.default, { value: metric.closePrice, originValue: metric.openingPrice }) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatNumberWithComma)(metric.volume) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatCompactNumber)(metric.transactionAmount) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatCurrency)(metric.openingPrice) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatCurrency)(metric.highPrice) }), (0, jsx_runtime_1.jsx)(MetricsTable_1.default.Cell, { children: (0, formatUtils_1.formatCurrency)(metric.lowPrice) })] }, index));
                        }) })] })] }));
};
exports.default = Test;

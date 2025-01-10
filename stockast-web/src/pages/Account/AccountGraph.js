"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const GraphInterval_enum_1 = require("../../enums/GraphInterval.enum");
const AccountGraph = () => {
    const [selectedInterval, setSelectedInterval] = (0, react_1.useState)(GraphInterval_enum_1.GRAPH_INTERVAL.WEEK);
    const changeInterval = (interval) => {
        setSelectedInterval(interval);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Header, {}), (0, jsx_runtime_1.jsx)(Graph, { interval: selectedInterval }), (0, jsx_runtime_1.jsx)("label", { className: 'my-2 flex space-x-2', children: Object.values(GraphInterval_enum_1.GRAPH_INTERVAL).map((interval, index) => ((0, jsx_runtime_1.jsx)(GraphVisualRadio, { title: (0, GraphInterval_enum_1.getGraphIntervalLabel)(interval), value: interval, changeInterval: changeInterval, isActive: selectedInterval == interval }, index))) })] }));
};
const Header = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'my-2', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-xl font-semibold', children: "1,000,000\uC6D0" }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex', children: [(0, jsx_runtime_1.jsx)("p", { className: 'mr-2', children: "\uC9C0\uB09C\uC8FC\uBCF4\uB2E4" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-red-500', children: "+100,000\uC6D0(10.0%)" })] })] }));
};
const Graph = ({ interval }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: 'h-[200px] w-full bg-blue-500', children: interval });
};
const GraphVisualRadio = ({ title, value, changeInterval, isActive, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: `cursor-pointer rounded-2xl px-4 py-0.5 font-light text-neutral-300 ${isActive && 'bg-white bg-opacity-10 font-normal text-white'}`, onClick: () => changeInterval(value), children: title }));
};
exports.default = AccountGraph;

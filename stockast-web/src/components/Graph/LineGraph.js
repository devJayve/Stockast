"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const d3_1 = require("d3");
const LineGraph = () => {
    const [data, setData] = (0, react_1.useState)([24, 30, 45, 80, 25]);
    const svgRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const svg = (0, d3_1.select)(svgRef.current);
        svg
            .selectAll('circle')
            .data(data)
            .join((enter) => enter.append('circle'), (update) => update.attr('class', 'updated'), (exit) => exit.remove())
            .attr('r', (value) => value)
            .attr('cx', (value) => value * 2)
            .attr('cy', (value) => value * 2)
            .attr('stroke', 'red');
    }, [data]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("svg", { ref: svgRef, children: data.map((el, i) => ((0, jsx_runtime_1.jsx)("circle", { children: el }, i))) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setData(data.map((el) => el + 5));
                }, children: "increase" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                    setData(data.filter((el) => el > 35));
                }, children: "filter" })] }));
};
exports.default = LineGraph;

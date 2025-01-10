"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const klinecharts_1 = require("klinecharts");
const generatedDataList_1 = __importDefault(require("./generatedDataList"));
const StockChart = () => {
    const chart = (0, react_1.useRef)();
    const paneId = (0, react_1.useRef)('');
    (0, react_1.useEffect)(() => {
        var _a, _b, _c;
        chart.current = (0, klinecharts_1.init)('stock-chart', {
            styles: {
                grid: {
                    horizontal: {
                        color: '#646464',
                    },
                    vertical: {
                        color: '#646464',
                    },
                },
                xAxis: {
                    axisLine: {
                        color: '#646464',
                    },
                    tickLine: {
                        color: '#646464',
                    },
                    tickText: {
                        color: '#dcdcdc',
                    },
                },
                yAxis: {
                    axisLine: {
                        color: '#646464',
                    },
                    tickLine: {
                        color: '#646464',
                    },
                    tickText: {
                        color: '#dcdcdc',
                    },
                },
                candle: {
                    tooltip: {
                        showRule: 'none',
                    },
                    bar: {
                        upColor: '#3e6ff5',
                        downColor: '#da3334',
                        upWickColor: '#3e6ff5',
                        downWickColor: '#da3334',
                        upBorderColor: '#3e6ff5',
                        downBorderColor: '#da3334',
                        noChangeColor: '#ffffff',
                    },
                    priceMark: {
                        high: {
                            color: '#da3334',
                        },
                        low: {
                            color: '#3e6ff5',
                        },
                        last: {
                            upColor: '#3e6ff5',
                            downColor: '#da3334',
                        },
                    },
                },
            },
        });
        (_a = chart === null || chart === void 0 ? void 0 : chart.current) === null || _a === void 0 ? void 0 : _a.createIndicator('VOL', false, { id: paneId.current });
        (_b = chart.current) === null || _b === void 0 ? void 0 : _b.overrideIndicator({
            name: 'VOL',
            styles: {
                bars: [
                    {
                        upColor: '#3e6ff5',
                        downColor: '#da3334',
                        noChangeColor: '#ffffff',
                    },
                ],
                lines: [],
            },
        });
        (_c = chart === null || chart === void 0 ? void 0 : chart.current) === null || _c === void 0 ? void 0 : _c.applyNewData((0, generatedDataList_1.default)());
        return () => {
            (0, klinecharts_1.dispose)('real-time-k-line');
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: 'flex w-full flex-1 flex-col rounded-xl bg-neutral-800 p-5', children: (0, jsx_runtime_1.jsx)("div", { id: 'stock-chart', className: 'flex flex-grow' }) }));
};
exports.default = StockChart;

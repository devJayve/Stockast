"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const StockHeader_1 = __importDefault(require("./StockHeader"));
const StockChart_1 = __importDefault(require("./StockChart"));
const DailyQuote_1 = __importDefault(require("./DailyQuote"));
const Order_1 = __importDefault(require("./Order/Order"));
const Stocks = () => {
    const { stockId } = (0, react_router_dom_1.useParams)();
    const [width, setWidth] = (0, react_1.useState)(() => {
        const savedWidth = localStorage.getItem('resizableWidth');
        return savedWidth ? parseFloat(savedWidth) : 70;
    });
    const [isResizing, setIsResizing] = (0, react_1.useState)(false);
    const minWidth = 20;
    const maxWidth = 80;
    function handleMouseDown() {
        setIsResizing(true);
    }
    function handleMouseMove(e) {
        let newWidth = (e.clientX / window.innerWidth) * 100;
        if (newWidth < minWidth)
            newWidth = minWidth;
        if (newWidth > maxWidth)
            newWidth = maxWidth;
        setWidth(newWidth);
    }
    function handleMouseUp() {
        setIsResizing(false);
    }
    (0, react_1.useEffect)(() => {
        localStorage.setItem('resizableWidth', width.toString());
    }, [width]);
    (0, react_1.useEffect)(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-full flex-col', children: [(0, jsx_runtime_1.jsx)(StockHeader_1.default, {}), (0, jsx_runtime_1.jsx)(ResizedLayout, { handleMouseDown: handleMouseDown, width: width })] }));
};
const ResizedLayout = ({ width, handleMouseDown, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-grow', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col space-y-1', style: { width: `${width}%` }, children: [(0, jsx_runtime_1.jsx)(StockChart_1.default, {}), (0, jsx_runtime_1.jsx)(DailyQuote_1.default, {})] }), (0, jsx_runtime_1.jsx)("div", { className: 'w-1 cursor-col-resize hover:bg-blue-500', onMouseDown: handleMouseDown }), (0, jsx_runtime_1.jsx)("div", { className: 'flex flex-grow', children: (0, jsx_runtime_1.jsx)(Order_1.default, {}) })] }));
};
exports.default = Stocks;

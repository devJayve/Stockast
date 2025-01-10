"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const MetricsTable = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("table", { className: 'table-auto text-neutral-300', children: children });
};
const Header = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { className: 'border-b-0.5 border-neutral-500 text-right text-sm text-neutral-300', children: react_1.default.Children.map(children, (child, index) => {
                if (react_1.default.isValidElement(child)) {
                    const className = index === 0
                        ? `${child.props.className || ''} text-left`
                        : child.props.className;
                    return react_1.default.cloneElement(child, { className });
                }
                return child;
            }) }) }));
};
const Column = ({ children, className }) => {
    return (0, jsx_runtime_1.jsx)("th", { className: (0, clsx_1.default)('py-2', className), children: children });
};
const Row = ({ children, className }) => {
    return ((0, jsx_runtime_1.jsx)("tr", { className: (0, clsx_1.default)('text-right', className), children: react_1.default.Children.map(children, (child, index) => {
            if (react_1.default.isValidElement(child)) {
                const className = index === 0
                    ? `${child.props.className || ''} text-left`
                    : child.props.className;
                return react_1.default.cloneElement(child, { className });
            }
            return child;
        }) }));
};
const Body = ({ children, className }) => {
    return (0, jsx_runtime_1.jsx)("tbody", { className: className, children: children });
};
const Cell = ({ children, className }) => {
    return (0, jsx_runtime_1.jsx)("td", { className: (0, clsx_1.default)('py-1', className), children: children });
};
MetricsTable.Header = Header;
MetricsTable.Column = Column;
MetricsTable.Body = Body;
MetricsTable.Row = Row;
MetricsTable.Cell = Cell;
exports.default = MetricsTable;

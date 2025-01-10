"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const io_1 = require("react-icons/io");
const clsx_1 = __importDefault(require("clsx"));
const DropdownContext = (0, react_1.createContext)(null);
const useDropdownContext = () => {
    const context = (0, react_1.useContext)(DropdownContext);
    if (!context) {
        throw Error('Drowdown context has problem');
    }
    return context;
};
const Dropdown = (0, react_1.forwardRef)((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(DropdownContext.Provider, { value: Object.assign({}, rest), children: (0, jsx_runtime_1.jsx)("div", { ref: ref, className: 'relative', children: children }) }));
});
const Modal = ({ controls, children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'absolute top-full w-full rounded-xl bg-neutral-700 p-2', children: [(0, jsx_runtime_1.jsx)("div", { children: children }), controls] }));
};
const Trigger = ({ label, handleModalVisible }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex items-center justify-between rounded-lg border-1 border-white/20 p-2', onClick: handleModalVisible, children: [label, (0, jsx_runtime_1.jsx)(io_1.IoIosArrowDown, { opacity: '0.5' })] }));
};
const Item = ({ label }) => {
    const { options, onChange } = useDropdownContext();
    const isActive = Array.isArray(options)
        ? options.includes(label)
        : options === label;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)({ 'bg-blue-950': isActive }), onClick: () => onChange(label), children: label }));
};
Dropdown.displayName = 'Dropdown';
Dropdown.Modal = Modal;
Dropdown.Trigger = Trigger;
Dropdown.Item = Item;
exports.default = Dropdown;

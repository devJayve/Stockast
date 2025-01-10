"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const TabBarContext = (0, react_1.createContext)(null);
const useTabBarContext = () => {
    const context = (0, react_1.useContext)(TabBarContext);
    if (!context) {
        throw new Error('Tab components must be used within a TabBar');
    }
    return context;
};
const TabBar = ({ children, selectedTab, onTabChange, hasUnderline = false, hasBackground = false, }) => {
    return ((0, jsx_runtime_1.jsx)(TabBarContext.Provider, { value: { selectedTab, onTabChange }, children: (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('flex space-x-2', hasUnderline && 'relative border-b border-neutral-400', hasBackground && 'rounded-lg bg-neutral-700 p-1'), children: children }) }));
};
const CircleTab = ({ label, value, className }) => {
    const { selectedTab, onTabChange } = useTabBarContext();
    const isActive = selectedTab == value;
    return ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: (0, clsx_1.default)('rounded-full px-3 py-1.5 text-neutral-200', {
            'bg-neutral-800 font-semibold text-white': isActive,
        }, className), onClick: () => onTabChange(value), children: label }));
};
const UnderlineTab = ({ label, value }) => {
    const { selectedTab, onTabChange } = useTabBarContext();
    const isActive = selectedTab == value;
    return ((0, jsx_runtime_1.jsxs)("button", { type: 'button', className: (0, clsx_1.default)('relative py-2 text-center text-neutral-200', isActive && 'font-semibold'), onClick: () => onTabChange(value), children: [label, isActive && ((0, jsx_runtime_1.jsx)("div", { className: 'absolute bottom-[-1px] left-0 z-10 h-1 w-full rounded-full bg-white' }))] }));
};
const InterfaceTab = ({ label, value, activeColor = `bg-neutral-200/20 text-white font-semibold`, }) => {
    const { selectedTab, onTabChange } = useTabBarContext();
    const isActive = selectedTab == value;
    return ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: (0, clsx_1.default)('flex-1 rounded-lg py-2 text-center text-neutral-200 transition-colors', isActive && activeColor), onClick: () => onTabChange(value), children: label }));
};
TabBar.CircleTab = CircleTab;
TabBar.UnderlineTab = UnderlineTab;
TabBar.InterfaceTab = InterfaceTab;
exports.default = TabBar;

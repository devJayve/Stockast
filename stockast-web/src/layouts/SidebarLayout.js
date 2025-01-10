"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const clsx_1 = __importDefault(require("clsx"));
const SidebarLayout = () => {
    const tabs = [
        { name: '자산', path: '/account/asset' },
        { name: '거래 내역', path: '/account/transaction' },
        { name: '주문 내역', path: '/account/orders' },
        { name: '판매 수익', path: '/account/profit' },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'h-screen flex-col bg-neutral-900 text-white', children: [(0, jsx_runtime_1.jsxs)("nav", { className: 'flex items-center justify-between p-4', children: [(0, jsx_runtime_1.jsx)("img", { src: '/images/logo.png', width: '80px' }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-6', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: "\uD648" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/account/asset', children: "\uB0B4 \uACC4\uC88C" })] }), (0, jsx_runtime_1.jsx)("div", {})] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex', children: [(0, jsx_runtime_1.jsx)("aside", { className: 'flex flex-col space-y-4 border-r border-neutral-800 px-6 py-4', children: tabs.map((tab) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: tab.path, className: ({ isActive }) => (0, clsx_1.default)('py-2 text-left font-medium transition-all duration-300 hover:text-blue-400', isActive && 'font-semibold text-blue-500'), children: tab.name }, tab.name))) }), (0, jsx_runtime_1.jsx)("main", { className: 'flex-grow p-8', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })] })] }));
};
exports.default = SidebarLayout;

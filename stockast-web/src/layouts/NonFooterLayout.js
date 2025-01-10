"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const NonFooterLayout = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: "Home" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/account', children: "\uACC4\uC88C \uC815\uBCF4" })] }), (0, jsx_runtime_1.jsxs)("main", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}), " "] })] }));
};
exports.default = NonFooterLayout;

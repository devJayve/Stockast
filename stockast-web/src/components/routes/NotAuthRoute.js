"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const NotAuthRoute = ({ isAuth }) => {
    return isAuth ? (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: '/', replace: true }) : (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {});
};
exports.default = NotAuthRoute;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const userApi_1 = require("../api/userApi");
function Layout() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleLogout = () => __awaiter(this, void 0, void 0, function* () {
        yield (0, userApi_1.logoutUser)(dispatch);
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-screen w-screen flex-col', children: [(0, jsx_runtime_1.jsxs)("nav", { className: 'flex items-center justify-between p-4', children: [(0, jsx_runtime_1.jsx)("img", { src: '/images/logo.png', width: '80px' }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex space-x-6', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/', children: "\uD648" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/account/asset', children: "\uB0B4 \uACC4\uC88C" })] }), (0, jsx_runtime_1.jsx)("div", {})] }), (0, jsx_runtime_1.jsx)("main", { className: 'container mx-auto min-h-0 flex-grow px-4', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }), (0, jsx_runtime_1.jsx)("footer", { className: 'flex items-center justify-center bg-neutral-900 p-4', children: (0, jsx_runtime_1.jsx)("button", { onClick: handleLogout, children: "\uB85C\uADF8\uC544\uC6C3" }) })] }));
}
exports.default = Layout;

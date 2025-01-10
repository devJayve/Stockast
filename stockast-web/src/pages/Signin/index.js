"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const GoogleSignInButton_1 = __importDefault(require("../../components/buttons/GoogleSignInButton"));
const Signin = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-screen flex-col items-center justify-center', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'm-20', children: [(0, jsx_runtime_1.jsx)("img", { src: '/images/logo.png', alt: 'logo', width: '400px' }), (0, jsx_runtime_1.jsx)("div", { className: 'h-0.5 w-full bg-white opacity-70' })] }), (0, jsx_runtime_1.jsx)(GoogleSignInButton_1.default, {})] }));
};
exports.default = Signin;

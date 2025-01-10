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
const AuthService_1 = require("../../services/AuthService");
const react_redux_1 = require("react-redux");
const GoogleSignInButton = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, AuthService_1.signInWithGoogle)(dispatch);
    });
    return ((0, jsx_runtime_1.jsx)("div", { onClick: handleLogin, className: 'cursor-pointer rounded-full bg-white p-3 transition duration-200 ease-in-out hover:bg-white hover:opacity-80', children: (0, jsx_runtime_1.jsx)("img", { src: '/images/google_icon.png', width: '40px' }) }));
};
exports.default = GoogleSignInButton;

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
exports.verifyToken = exports.signOutWithGoogle = exports.signInWithGoogle = void 0;
const auth_1 = require("firebase/auth");
const firebase_1 = require("../firebase/firebase");
const userApi_1 = require("../api/userApi");
const signInWithGoogle = (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, auth_1.signInWithPopup)(firebase_1.auth, firebase_1.googleProvider);
        const body = {
            displayName: result.user.displayName,
            email: result.user.email,
            phoneNumber: result.user.phoneNumber,
            photoURL: result.user.photoURL,
            providerId: result.providerId,
            uid: result.user.uid,
        };
        dispatch((0, userApi_1.loginGoogleUser)(body));
    }
    catch (error) {
        console.error('Error Signing in with Google: ', error);
    }
});
exports.signInWithGoogle = signInWithGoogle;
const signOutWithGoogle = (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_1.signOut)(firebase_1.auth);
        localStorage.removeItem('accessToken');
        dispatch(logout());
        console.log('user logged out');
    }
    catch (error) {
        console.error('Error Logging out with google: ', error);
    }
});
exports.signOutWithGoogle = signOutWithGoogle;
const verifyToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = localStorage.getItem('accessToken');
    console.log(token);
    if (!token)
        return false;
    try {
        const response = yield fetch(`${process.env.REACT_APP_BASE_API}/user/verify`, {
            method: 'HEAD',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('verify: ', yield response.body);
        return response.ok;
    }
    catch (error) {
        console.error('error', error);
        return false;
    }
});
exports.verifyToken = verifyToken;

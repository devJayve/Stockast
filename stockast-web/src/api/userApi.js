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
exports.logoutUser = exports.authUser = exports.loginGoogleUser = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = require("../utils/axios");
exports.loginGoogleUser = (0, toolkit_1.createAsyncThunk)('user/loginGoogleUser', (body, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const response = yield axios_1.axiosInstance.post(`/user/login/google`, body);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || '로그인 실패');
    }
}));
exports.authUser = (0, toolkit_1.createAsyncThunk)('user/authUser', (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.axiosInstance.get(`user/auth`);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
}));
exports.logoutUser = (0, toolkit_1.createAsyncThunk)(`user/logoutUser`, (_, thunkAPI) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.axiosInstance.post(`/user/logout`);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
}));

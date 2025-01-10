"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const userApi_1 = require("../api/userApi");
const initialState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: null,
};
const userSlice = (0, toolkit_1.createSlice)({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userApi_1.loginGoogleUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(userApi_1.loginGoogleUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
            localStorage.setItem('accessToken', action.payload.accessToken);
            console.log(`access Token : ${action.payload.accessToken}`);
            console.log(`login user : ${JSON.stringify(action.payload, null, 2)}`);
        })
            .addCase(userApi_1.loginGoogleUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload || '로그인 실패';
        })
            .addCase(userApi_1.authUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(userApi_1.authUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
            console.log(`auth user : ${JSON.stringify(action.payload, null, 2)}`);
        })
            .addCase(userApi_1.authUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.user = initialState.user;
            state.isAuth = false;
            localStorage.removeItem('accessToken');
        })
            .addCase(userApi_1.logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(userApi_1.logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.user = initialState.user;
            state.isAuth = false;
            localStorage.removeItem('accessToken');
        })
            .addCase(userApi_1.logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
exports.default = userSlice.reducer;

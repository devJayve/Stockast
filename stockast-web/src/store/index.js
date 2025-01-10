"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistor = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const userSlice_ts_1 = __importDefault(require("./userSlice.ts"));
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const redux_persist_1 = require("redux-persist");
const rootReducer = (0, toolkit_1.combineReducers)({
    user: userSlice_ts_1.default,
});
const persistConfig = {
    key: 'root',
    storage: storage_1.default,
};
const persistedReducer = (0, redux_persist_1.persistReducer)(persistConfig, rootReducer);
exports.store = (0, toolkit_1.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [redux_persist_1.FLUSH, redux_persist_1.REHYDRATE, redux_persist_1.PAUSE, redux_persist_1.PERSIST, redux_persist_1.PURGE, redux_persist_1.REGISTER],
        },
    }),
});
exports.persistor = (0, redux_persist_1.persistStore)(exports.store);

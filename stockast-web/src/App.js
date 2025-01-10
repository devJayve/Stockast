"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const MainRoutes_1 = __importDefault(require("./components/routes/MainRoutes"));
const react_1 = require("redux-persist/integration/react");
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(react_1.PersistGate, { loading: null, persistor: store_1.persistor, children: (0, jsx_runtime_1.jsx)(MainRoutes_1.default, {}) }) }));
};
exports.default = App;

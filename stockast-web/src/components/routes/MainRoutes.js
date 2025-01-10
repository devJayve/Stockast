"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Signin_1 = __importDefault(require("../../pages/Signin"));
const Layout_1 = __importDefault(require("../../layouts/Layout"));
const AuthRoute_1 = __importDefault(require("./AuthRoute"));
const Home_1 = __importDefault(require("../../pages/Home"));
const Account_1 = __importDefault(require("../../pages/Account"));
const NonFooterLayout_1 = __importDefault(require("../../layouts/NonFooterLayout"));
const react_redux_1 = require("react-redux");
const NotAuthRoute_1 = __importDefault(require("./NotAuthRoute"));
const Landing_1 = __importDefault(require("../../pages/Landing"));
const Stocks_1 = __importDefault(require("../../pages/Stocks"));
const NotFound_1 = __importDefault(require("../../pages/NotFound"));
const userApi_1 = require("../../api/userApi");
const Test_1 = __importDefault(require("../../pages/Test"));
const SidebarLayout_1 = __importDefault(require("../../layouts/SidebarLayout"));
const Profit_1 = __importDefault(require("../../pages/Profit"));
const Orders_1 = __importDefault(require("../../pages/Orders"));
const Transaction_1 = __importDefault(require("../../pages/Transaction"));
const MainRoutes = () => {
    const isDevMode = process.env.NODE_ENV === 'development';
    const dispatch = (0, react_redux_1.useDispatch)();
    const isAuth = (0, react_redux_1.useSelector)((state) => { var _a; return (_a = state.user) === null || _a === void 0 ? void 0 : _a.isAuth; });
    const isLoading = (0, react_redux_1.useSelector)((state) => state.isLoading);
    const { pathname } = (0, react_router_dom_1.useLocation)();
    (0, react_1.useEffect)(() => {
        if (isAuth) {
            dispatch((0, userApi_1.authUser)());
        }
    }, [isAuth, pathname, dispatch]);
    if (isLoading) {
        return (0, jsx_runtime_1.jsx)(Landing_1.default, {});
    }
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(AuthRoute_1.default, { isAuth: isAuth }), children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}), children: [isDevMode && (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/test', element: (0, jsx_runtime_1.jsx)(Test_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/', element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/stocks/:stockId', element: (0, jsx_runtime_1.jsx)(Stocks_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '*', element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(SidebarLayout_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/account/asset', element: (0, jsx_runtime_1.jsx)(Account_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/account/transaction', element: (0, jsx_runtime_1.jsx)(Transaction_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/account/orders', element: (0, jsx_runtime_1.jsx)(Orders_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/account/profit', element: (0, jsx_runtime_1.jsx)(Profit_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(NonFooterLayout_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(NotAuthRoute_1.default, { isAuth: isAuth }), children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: '/signin', element: (0, jsx_runtime_1.jsx)(Signin_1.default, {}) }) })] }));
};
exports.default = MainRoutes;

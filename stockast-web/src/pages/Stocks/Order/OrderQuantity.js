"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValueControl_1 = __importDefault(require("../../../components/ValueControl/ValueControl"));
const TabBar_1 = __importDefault(require("../../../components/TabBar"));
const InterfaceBlock_1 = __importDefault(require("../../../components/Blocks/InterfaceBlock"));
const PriceCategory_enum_1 = require("../../../enums/PriceCategory.enum");
const react_hook_form_1 = require("react-hook-form");
const OrderQuantity = ({ defaultPrice, control, watch, setValue, maxAskPrice, minAskPrice, availableAmount, error, }) => {
    const priceCategory = watch('priceCategory');
    const orderPrice = watch('orderPrice');
    // 주식 수량 input에 대한 placeholder 값 함수
    const getQuantityPlaceholder = () => {
        if (orderPrice != defaultPrice) {
            return '수량 입력';
        }
        return `최대 ${Math.floor(availableAmount / defaultPrice)}주 가능`;
    };
    const setQuantity = (value) => {
        setValue('quantity', value);
    };
    return ((0, jsx_runtime_1.jsx)(InterfaceBlock_1.default, { title: '\uC218\uB7C9', children: (0, jsx_runtime_1.jsxs)("div", { className: 'w-full flex-col space-y-2', children: [(0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: 'orderPrice', control: control, render: ({ field }) => ((0, jsx_runtime_1.jsx)(ValueControl_1.default, Object.assign({}, field, { defaultValue: defaultPrice, max: maxAskPrice, min: minAskPrice, step: 100, unit: '\uC6D0', disabled: priceCategory === PriceCategory_enum_1.PriceCategoryEnum.MARKET_PRICE, showPlaceholder: priceCategory === PriceCategory_enum_1.PriceCategoryEnum.MARKET_PRICE, placeholder: '\uCD5C\uB300\uD55C \uBE60\uB978 \uAC00\uACA9' }))) }), (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: 'quantity', control: control, render: ({ field }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ValueControl_1.default, Object.assign({}, field, { defaultValue: 0, max: 1000000, min: 1, step: 1, unit: '\uC8FC', showPlaceholder: field.value === 0 || field.value === '', placeholder: `${getQuantityPlaceholder()}`, error: error })), error && ((0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-red-500', children: error.message }))] })) }), (0, jsx_runtime_1.jsx)(QuantityRatio, { setQuantity: setQuantity, availableAmount: availableAmount, stockPrice: orderPrice })] }) }));
};
const QuantityRatio = ({ availableAmount, stockPrice, setQuantity, }) => {
    const [selectedTab, setSelectedTab] = (0, react_1.useState)(null);
    const tabClassname = 'flex-grow rounded-xl border-1 border-neutral-500';
    // 탭에 대한 onChange 함수
    const handleTabChange = (value) => {
        setSelectedTab(value);
        calOrderQuantityByRatio(value);
    };
    // 구매 가능한 금액 비율에 맞는 주식 수량 계산 함수
    const calOrderQuantityByRatio = (percentage) => {
        const orderAmount = availableAmount * percentage;
        const maxQuantity = Math.floor(orderAmount / stockPrice);
        setQuantity(maxQuantity > 0 ? maxQuantity : 0);
    };
    return ((0, jsx_runtime_1.jsxs)(TabBar_1.default, { selectedTab: selectedTab, onTabChange: handleTabChange, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 0.1, label: '10%', className: tabClassname }), (0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 0.25, label: '25%', className: tabClassname }), (0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 0.5, label: '50%', className: tabClassname }), (0, jsx_runtime_1.jsx)(TabBar_1.default.CircleTab, { value: 1, label: '\uCD5C\uB300', className: tabClassname })] }));
};
exports.default = OrderQuantity;

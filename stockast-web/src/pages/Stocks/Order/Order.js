"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Divder_1 = __importDefault(require("../../../components/Divder"));
const react_hook_form_1 = require("react-hook-form");
const OrderQuantity_1 = __importDefault(require("./OrderQuantity"));
const PriceCategory_1 = __importDefault(require("./PriceCategory"));
const OrderMode_1 = __importDefault(require("./OrderMode"));
const OrderSubmit_1 = __importDefault(require("./OrderSubmit"));
const PriceCategory_enum_1 = require("../../../enums/PriceCategory.enum");
const OrderSummary_1 = __importDefault(require("./OrderSummary"));
const Order = () => {
    const availableAmount = 1000000;
    const marketPrice = 54100;
    const { control, handleSubmit, setValue, watch, reset, setError, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        defaultValues: {
            priceCategory: PriceCategory_enum_1.PriceCategoryEnum.CUSTOM_PRICE,
            orderPrice: marketPrice,
            quantity: 0,
        },
    });
    const onSubmit = (data) => {
        if (data.quantity === 0) {
            setError('quantity', { type: 'manual', message: '수량을 입력해주세요.' });
            return;
        }
        alert('주문 완료');
        reset();
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: 'flex w-full flex-col space-y-3 rounded-xl bg-neutral-800 p-5', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-lg font-semibold', children: "\uC8FC\uBB38\uD558\uAE30" }), (0, jsx_runtime_1.jsx)("table", { className: 'w-full', children: (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsx)(OrderMode_1.default, {}), (0, jsx_runtime_1.jsx)(PriceCategory_1.default, { control: control }), (0, jsx_runtime_1.jsx)(OrderQuantity_1.default, { availableAmount: availableAmount, defaultPrice: marketPrice, control: control, setValue: setValue, watch: watch, maxAskPrice: 70000, minAskPrice: 30000, error: errors.quantity })] }) }), (0, jsx_runtime_1.jsx)(Divder_1.default, {}), (0, jsx_runtime_1.jsx)(OrderSummary_1.default, { watch: watch, availableAmount: availableAmount }), (0, jsx_runtime_1.jsx)(OrderSubmit_1.default, {})] }));
};
exports.default = Order;

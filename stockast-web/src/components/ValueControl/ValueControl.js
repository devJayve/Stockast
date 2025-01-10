"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fi_1 = require("react-icons/fi");
const formatUtils_1 = require("../../utils/formatUtils");
const clsx_1 = __importDefault(require("clsx"));
const ValueControl = (0, react_1.forwardRef)(({ value, defaultValue, onChange, max, min, step = 1, unit, disabled, placeholder, showPlaceholder, error, }, ref) => {
    const inputRef = (0, react_1.useRef)(null);
    const [quantity, setQuantity] = (0, react_1.useState)((0, formatUtils_1.formatNumberWithComma)(value));
    // step 만큼 값을 증가, 감소시키는 함수
    const handleIncrement = () => updateQuantity(Number(value) + step);
    const handleDecrement = () => updateQuantity(Number(value) - step);
    // 최소, 최대을 넘지 않도록 조절하는 함수
    const updateQuantity = (newValue) => {
        if (newValue >= min && newValue <= max) {
            onChange(newValue);
        }
    };
    // 수량 변화시 NaN 등 이상 값 방지하는 함수
    const handleQuantityChange = (e) => {
        const inputValue = parseInt(e.target.value.replace(/,/g, ''), 10);
        if (isNaN(inputValue)) {
            onChange('');
            return;
        }
        onChange(inputValue);
    };
    // blur시 값 초기화하는 함수
    const handleBlur = () => {
        if (value === '') {
            onChange(defaultValue);
        }
    };
    (0, react_1.useEffect)(() => {
        setQuantity((0, formatUtils_1.formatNumberWithComma)(value));
        if (inputRef.current) {
            const inputElement = inputRef.current;
            if (disabled || showPlaceholder) {
                inputElement.style.width = '100%';
            }
            else {
                inputElement.style.width = `${inputElement.value.length + 0.5}ch`;
            }
        }
    }, [value, disabled]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, clsx_1.default)('flex items-center justify-between rounded-lg border-1 border-white/20 px-3 py-1', error && 'border-red-500'), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex', children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, type: 'text', value: showPlaceholder ? '' : (0, formatUtils_1.formatNumberWithComma)(value), placeholder: showPlaceholder ? placeholder : '', onBlur: handleBlur, onChange: handleQuantityChange, className: 'min-w-0 bg-transparent focus:outline-none', disabled: disabled }), !showPlaceholder && (0, jsx_runtime_1.jsx)("span", { children: unit })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex gap-x-1', children: [(0, jsx_runtime_1.jsx)("button", { type: 'button', disabled: disabled, onClick: handleDecrement, className: '', children: (0, jsx_runtime_1.jsx)(fi_1.FiMinus, { size: 15, strokeWidth: 2, opacity: 0.5 }) }), (0, jsx_runtime_1.jsx)("button", { type: 'button', disabled: disabled, onClick: handleIncrement, children: (0, jsx_runtime_1.jsx)(fi_1.FiPlus, { size: 15, strokeWidth: 2, opacity: 0.5 }) })] })] }));
});
ValueControl.displayName = 'ValueControl';
exports.default = ValueControl;

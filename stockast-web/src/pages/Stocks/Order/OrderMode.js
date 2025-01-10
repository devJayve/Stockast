"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useDropdown_1 = __importDefault(require("../../../hooks/useDropdown"));
const Dropdown_1 = __importDefault(require("../../../components/Dropdown/Dropdown"));
const Dropdown_2 = __importDefault(require("../../../components/Dropdown/Dropdown"));
const InterfaceBlock_1 = __importDefault(require("../../../components/Blocks/InterfaceBlock"));
const OrderMode = () => {
    const { options, onChange, isModalVisible, handleModalVisible, ref } = (0, useDropdown_1.default)(false);
    const modes = ['예약 주문', '조건 주문'];
    return ((0, jsx_runtime_1.jsx)(InterfaceBlock_1.default, { title: '\uC8FC\uBB38 \uC720\uD615', children: (0, jsx_runtime_1.jsxs)(Dropdown_1.default, { options: options, onChange: onChange, ref: ref, children: [(0, jsx_runtime_1.jsx)(Dropdown_2.default.Trigger, { handleModalVisible: handleModalVisible, label: options !== null && options !== void 0 ? options : '선택하기' }), isModalVisible && ((0, jsx_runtime_1.jsx)(Dropdown_2.default.Modal, { children: modes.map((mode, index) => ((0, jsx_runtime_1.jsx)(Dropdown_2.default.Item, { label: mode }, index))) }))] }) }));
};
exports.default = OrderMode;

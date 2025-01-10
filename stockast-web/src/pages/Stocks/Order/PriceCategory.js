"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InterfaceBlock_1 = __importDefault(require("../../../components/Blocks/InterfaceBlock"));
const TabBar_1 = __importDefault(require("../../../components/TabBar"));
const react_hook_form_1 = require("react-hook-form");
const PriceCategory = ({ control }) => {
    return ((0, jsx_runtime_1.jsx)(InterfaceBlock_1.default, { title: '\uAD6C\uB9E4\uAC00\uACA9', children: (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: 'priceCategory', control: control, render: ({ field }) => ((0, jsx_runtime_1.jsxs)(TabBar_1.default, { selectedTab: field.value, onTabChange: field.onChange, hasBackground: true, children: [(0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 0, label: '지정가' }), (0, jsx_runtime_1.jsx)(TabBar_1.default.InterfaceTab, { value: 1, label: '시장가' })] })) }) }));
};
exports.default = PriceCategory;

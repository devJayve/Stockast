"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const clsx_1 = __importDefault(require("clsx"));
const dummyData = Array(20)
    .fill(0)
    .map((_, index) => ({
    date: `11.${15 - (index % 10)}`,
    time: `${10 + (index % 12)}:${index % 60}`.padStart(5, '0'),
    stockName: ['애플', '테슬라', 'CIBR', 'XLK', 'DGRO'][index % 5],
    transactionType: index % 3 === 0 ? '외화배당금입금' : '판매',
    transactionAmount: index % 2 === 0
        ? `$${(0.21 * index).toFixed(2)}`
        : `-$${(0.45 * index).toFixed(2)}`,
    balance: `$${(1128.54 - index * 5).toFixed(2)}`,
}));
const HistoryList = () => {
    const [selectedItem, setSelectedItem] = (0, react_1.useState)(null);
    const [isPending, setIsPending] = (0, react_1.useState)(false); // 애니메이션 중인지 상태 관리
    const handleSelectItem = (item) => {
        if (selectedItem === item) {
            // 닫기
            setIsPending(true); // 애니메이션 시작
            setTimeout(() => {
                setSelectedItem(null);
                setIsPending(false); // 애니메이션 종료
            }, 300); // 애니메이션 시간 (Tailwind `duration-300`에 맞춤)
        }
        else {
            setIsPending(true); // 애니메이션 시작
            setTimeout(() => {
                setSelectedItem(item);
                setIsPending(false); // 애니메이션 종료
            }, 300);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex h-screen bg-neutral-900 text-white transition-all duration-300', children: [(0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('overflow-y-auto border-r border-neutral-700 p-4 transition-all duration-300', selectedItem ? 'w-2/3' : 'w-full'), children: (0, jsx_runtime_1.jsx)("ul", { className: 'space-y-4', children: dummyData.map((item, index) => ((0, jsx_runtime_1.jsxs)("li", { className: 'flex cursor-pointer justify-between border-b border-neutral-700 pb-3 hover:bg-neutral-800', onClick: () => handleSelectItem(item), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col', children: [(0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-gray-400', children: item.date }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm', children: item.stockName }), (0, jsx_runtime_1.jsxs)("p", { className: 'text-xs text-gray-500', children: [item.time, " | ", item.transactionType] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex flex-col items-end', children: [(0, jsx_runtime_1.jsx)("p", { className: `font-semibold ${item.transactionAmount.startsWith('-')
                                            ? 'text-red-500'
                                            : 'text-blue-500'}`, children: item.transactionAmount }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-gray-400', children: item.balance })] })] }, index))) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)('overflow-y-auto p-6 transition-all duration-300', selectedItem ? 'w-1/3' : 'w-0'), children: !isPending && selectedItem ? ((0, jsx_runtime_1.jsxs)("div", { className: 'opacity-100', children: [(0, jsx_runtime_1.jsx)("h2", { className: 'text-lg font-semibold', children: selectedItem.stockName }), (0, jsx_runtime_1.jsx)("p", { className: 'text-xl font-bold text-blue-500', children: selectedItem.transactionAmount }), (0, jsx_runtime_1.jsxs)("p", { className: 'mt-2 text-sm text-gray-400', children: ["\uAC70\uB798\uC720\uD615: ", selectedItem.transactionType] }), (0, jsx_runtime_1.jsxs)("p", { className: 'text-sm text-gray-400', children: ["\uC785\uAE08\uC77C\uC2DC: ", selectedItem.date, " ", selectedItem.time] }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-gray-400', children: "\uCD1D \uAE08\uC561(\uC138\uC804): $0.25" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-gray-400', children: "\uC678\uAD6D\uB0A9\uBD80\uC138\uAE08: $0.04" }), (0, jsx_runtime_1.jsx)("p", { className: 'text-sm text-gray-400', children: "\uC218\uC218\uB8CC: $0.00" })] })) : ((0, jsx_runtime_1.jsx)("div", { className: 'opacity-0' }) // 애니메이션 중에는 비우기
                ) })] }));
};
exports.default = HistoryList;

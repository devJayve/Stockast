"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useRadioGroup(init) {
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(init);
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    };
    return { selectedOption, handleChange };
}
exports.default = useRadioGroup;

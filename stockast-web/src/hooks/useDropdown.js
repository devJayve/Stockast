"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useDropdown = (isMultiple) => {
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)(null);
    const [isModalVisible, setIsModalVisible] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsModalVisible(false);
        }
    };
    const handleModalVisible = () => {
        setIsModalVisible((prevVisible) => !prevVisible);
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    const onChange = (0, react_1.useCallback)((option) => {
        if (isMultiple) {
            setSelectedOptions((prevSelected) => {
                if (Array.isArray(prevSelected)) {
                    return prevSelected.includes(option)
                        ? prevSelected.filter((item) => item !== option)
                        : [...prevSelected, option];
                }
                return [option];
            });
        }
        else {
            setSelectedOptions(option);
            handleModalVisible();
        }
    }, [isMultiple, selectedOptions]);
    return {
        options: selectedOptions,
        onChange,
        ref,
        isModalVisible,
        handleModalVisible,
    };
};
exports.default = useDropdown;

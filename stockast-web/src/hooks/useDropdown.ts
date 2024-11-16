import { useCallback, useEffect, useRef, useState } from 'react';

const useDropdown = (isMultiple: { isMultiple: boolean }) => {
  const [selectedOptions, setSelectedOptions] = useState<
    string | string[] | null
  >(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsModalVisible(false);
    }
  };

  const handleModalVisible = () => {
    setIsModalVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const onChange = useCallback(
    (option: string) => {
      if (isMultiple) {
        setSelectedOptions((prevSelected) => {
          if (Array.isArray(prevSelected)) {
            return prevSelected.includes(option)
              ? prevSelected.filter((item) => item !== option)
              : [...prevSelected, option];
          }
          return [option];
        });
      } else {
        setSelectedOptions(option);
        handleModalVisible();
      }
    },
    [isMultiple, selectedOptions]
  );

  return {
    options: selectedOptions,
    onChange,
    ref,
    isModalVisible,
    handleModalVisible,
  };
};

export default useDropdown;

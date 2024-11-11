import { useState } from 'react';

function useRadioGroup(init: number) {
  const [selectedOption, setSelectedOption] = useState(init);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return { selectedOption, handleChange };
}

export default useRadioGroup;

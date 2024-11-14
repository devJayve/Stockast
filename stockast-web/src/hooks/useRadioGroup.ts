import { useState } from 'react';

function useRadioGroup(init: number) {
  const [selectedOption, setSelectedOption] = useState(init);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return { selectedOption, handleChange };
}

export default useRadioGroup;

import React from 'react';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { RadioGroupDummy } from './dummyData';
import useRadioGroup from '../../hooks/useRadioGroup';

const Test = () => {
  const { selectedOption, handleChange } = useRadioGroup(1);

  return (
    <div>
      <RadioGroup
        options={RadioGroupDummy}
        onChange={handleChange}
        value={selectedOption}
      />
    </div>
  );
};

export default Test;

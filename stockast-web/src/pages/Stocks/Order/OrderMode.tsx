import useDropdown from '../../../hooks/useDropdown';
import DropDown from '../../../components/Dropdown/Dropdown';
import Dropdown from '../../../components/Dropdown/Dropdown';
import React from 'react';
import InterfaceBlock from '../../../components/Blocks/InterfaceBlock';

const OrderMode = () => {
  const { options, onChange, isModalVisible, handleModalVisible, ref } =
    useDropdown(false);

  const modes = ['예약 주문', '조건 주문'];

  return (
    <InterfaceBlock title='주문 유형'>
      {
        <DropDown options={options} onChange={onChange} ref={ref}>
          <Dropdown.Trigger
            handleModalVisible={handleModalVisible}
            label={options ?? '선택하기'}
          />
          {isModalVisible && (
            <Dropdown.Modal>
              {modes.map((mode, index) => (
                <Dropdown.Item key={index} label={mode} />
              ))}
            </Dropdown.Modal>
          )}
        </DropDown>
      }
    </InterfaceBlock>
  );
};

export default OrderMode;

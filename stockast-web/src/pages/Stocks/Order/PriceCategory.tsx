import React from 'react';
import InterfaceBlock from '../../../components/Blocks/InterfaceBlock';
import TabBar from '../../../components/TabBar';
import { FormComponent } from '../../../types/Order.types';
import { Controller } from 'react-hook-form';

const PriceCategory: React.FC<FormComponent> = ({ control }) => {
  return (
    <InterfaceBlock title='구매가격'>
      <Controller
        name='priceCategory'
        control={control}
        render={({ field }) => (
          <TabBar
            selectedTab={field.value}
            onTabChange={field.onChange}
            hasBackground={true}
          >
            <TabBar.InterfaceTab value={0} label={'지정가'} />
            <TabBar.InterfaceTab value={1} label={'시장가'} />
          </TabBar>
        )}
      />
    </InterfaceBlock>
  );
};

export default PriceCategory;

import React, { useState } from 'react';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { InterfaceTabBarDummy, RadioGroupDummy } from './dummyData';
import useRadioGroup from '../../hooks/useRadioGroup';
import InterfaceTabBar from '../../components/InterfaceTabBar/InterfaceTabBar';
import { TabBarShape } from '../../types/InterfaceTabBar.types';
import TabBar from '../../components/TabBar';

const Test = () => {
  const [circleTab, setCircleTab] = useState(0);
  const [underlineTab, setUnderlineTab] = useState(0);
  const [interfaceTab, setInterfaceTab] = useState(0);

  return (
    <div>
      <div>
        <h2>Circle Tab Example</h2>
        <TabBar selectedTab={circleTab} onTabChange={setCircleTab}>
          <TabBar.CircleTab value={0} label='Home' />
          <TabBar.CircleTab value={1} label='Profile' />
          <TabBar.CircleTab value={2} label='Settings' />
        </TabBar>

        <h2>Underline Tab Example</h2>
        <TabBar
          selectedTab={underlineTab}
          onTabChange={setUnderlineTab}
          hasUnderline={true}
        >
          <TabBar.UnderlineTab value={0} label='Overview' />
          <TabBar.UnderlineTab value={1} label='Stats' />
          <TabBar.UnderlineTab value={2} label='Details' />
        </TabBar>

        <h2>Interface Tab Example</h2>
        <TabBar
          selectedTab={interfaceTab}
          onTabChange={setInterfaceTab}
          hasBackground={true}
        >
          <TabBar.InterfaceTab value={0} label='Section 1' />
          <TabBar.InterfaceTab value={1} label='Section 2' />
          <TabBar.InterfaceTab
            value={2}
            label='Section 3'
            activeColor='bg-blue-500/30 text-blue-400 font-semibold'
          />
        </TabBar>
      </div>
    </div>
  );
};

export default Test;

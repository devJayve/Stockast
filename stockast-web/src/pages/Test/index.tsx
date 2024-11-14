import React, { useState } from 'react';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { InterfaceTabBarDummy, RadioGroupDummy } from './dummyData';
import useRadioGroup from '../../hooks/useRadioGroup';
import InterfaceTabBar from '../../components/InterfaceTabBar/InterfaceTabBar';
import { TabBarShape } from '../../types/InterfaceTabBar.types';
import TabBar from '../../components/TabBar';
import InfoCard from '../../components/InfoCard';
import { Metric } from '../../types/InfoCard.types';

const Test = () => {
  const [circleTab, setCircleTab] = useState(0);
  const [underlineTab, setUnderlineTab] = useState(0);
  const [interfaceTab, setInterfaceTab] = useState(0);
  const metric: Metric = {
    label: '코스닥',
    value: '729.04',
  };

  return (
    <div className={'flex flex-col gap-4'}>
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

      <p>주식 지표 컴포넌트</p>
      <div className='flex space-x-2'>
        <InfoCard value={729.04} originalValue={724.38}>
          <InfoCard.Stat>
            <InfoCard.IndexContent
              label='코스닥'
              iconUrl='/images/korea_flag.png'
            />
            <InfoCard.ChangeRate />
          </InfoCard.Stat>
          <InfoCard.Chart />
        </InfoCard>
        <InfoCard value={729.04} originalValue={729.04}>
          <InfoCard.Stat>
            <InfoCard.IndexContent
              label='코스닥'
              iconUrl='/images/korea_flag.png'
            />
            <InfoCard.ChangeRate />
          </InfoCard.Stat>
          <InfoCard.Chart />
        </InfoCard>
        <InfoCard value={729.04} originalValue={734.38}>
          <InfoCard.Stat>
            <InfoCard.IndexContent
              label='코스닥'
              iconUrl='/images/korea_flag.png'
            />
            <InfoCard.ChangeRate />
          </InfoCard.Stat>
          <InfoCard.Chart />
        </InfoCard>
      </div>

      <div>
        <p>주식 계좌 컴포넌트</p>
        <InfoCard value={729.04} originalValue={734.38}>
          <InfoCard.Stat>
            <InfoCard.BalanceContent
              label='국내주식'
              iconUrl='/images/korea_flag.png'
            />
            <InfoCard.ChangeRate />
          </InfoCard.Stat>
          <InfoCard.Detail />
        </InfoCard>
      </div>

      <div>
        <p>계좌 잔고 컴포넌트</p>
        <InfoCard value={100000} originalValue={null}>
          <InfoCard.Stat>
            <InfoCard.BalanceContent
              label='원화'
              iconUrl='/images/korea_flag.png'
            />
          </InfoCard.Stat>
        </InfoCard>
      </div>
    </div>
  );
};

export default Test;

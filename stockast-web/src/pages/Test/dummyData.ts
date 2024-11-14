import { RadioOptionType } from '../../types/Radio.types';
import { TabTypes } from '../../types/InterfaceTabBar.types';

export const RadioGroupDummy: RadioOptionType[] = [
  {
    label: '예',
    name: 'button-types',
    value: '1',
  },
  {
    label: '아니오',
    name: 'button-types',
    value: '2',
  },
  {
    label: '모름',
    name: 'button-types',
    value: '3',
  },
];

export const InterfaceTabBarDummy: TabTypes[] = [
  {
    label: '구매',
    name: 'interface-tab',
    value: '1',
  },
  {
    label: '판매',
    name: 'interface-tab',
    value: '2',
  },
  {
    label: '대기',
    name: 'interface-tab',
    value: '3',
  },
];

interface StockMetric {
  date: Date;
  closePrice: number;
  volume: number;
  transactionAmount: number;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
}

export const tableResponse: StockMetric[] = [
  {
    date: new Date('2023-11-11'),
    closePrice: 55100,
    volume: 27788638,
    transactionAmount: 1500000000000,
    openingPrice: 56700,
    highPrice: 56800,
    lowPrice: 55000,
  },
  {
    date: new Date('2023-11-08'),
    closePrice: 57000,
    volume: 13877396,
    transactionAmount: 799600000000,
    openingPrice: 58000,
    highPrice: 58300,
    lowPrice: 57000,
  },
  {
    date: new Date('2023-11-07'),
    closePrice: 57500,
    volume: 17043102,
    transactionAmount: 982100000000,
    openingPrice: 56900,
    highPrice: 58100,
    lowPrice: 56800,
  },
  {
    date: new Date('2023-11-06'),
    closePrice: 57300,
    volume: 22092218,
    transactionAmount: 1300000000000,
    openingPrice: 57600,
    highPrice: 58000,
    lowPrice: 56300,
  },
  {
    date: new Date('2023-11-05'),
    closePrice: 57600,
    volume: 17484474,
    transactionAmount: 1000000000000,
    openingPrice: 57800,
    highPrice: 58100,
    lowPrice: 57600,
  },
  {
    date: new Date('2023-11-04'),
    closePrice: 58700,
    volume: 15586947,
    transactionAmount: 916900000000,
    openingPrice: 58600,
    highPrice: 59400,
    lowPrice: 58400,
  },
  {
    date: new Date('2023-11-03'),
    closePrice: 58300,
    volume: 18083420,
    transactionAmount: 1100000000000,
    openingPrice: 59000,
    highPrice: 59600,
    lowPrice: 58000,
  },
];

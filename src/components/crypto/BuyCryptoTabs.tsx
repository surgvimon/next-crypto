'use client'
import React from 'react';
import { Tabs, TabsProps } from 'antd';
import BuyCryptoForm from '../sections/crypto/BuyCryptoForm';
import SellCryptoForm from '../sections/crypto/SellCryptoForm';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Buy',
      children: <BuyCryptoForm />,
    },
    {
      key: '2',
      label: 'Sell',
      children: <SellCryptoForm />,
    },
];
const onChange = (key: string) => {
  console.log(key);
};


const BuyCryptoTabs = () => {
  return (
    <>
      <Tabs
        onChange={onChange}
        type="card"
        items={items}
    />
    </>
  )
}

export default BuyCryptoTabs

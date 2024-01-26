'use client'
import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  InputNumber,
  Select,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptoValue } from '@/services/user.service';

const { Option } = Select;


  
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const BuyCryptoForm = () => {

    const { cryptos } = useSelector((state:any) => state.crypto);
    const [listCryptos, setListCryptos] = useState();
    var dispatch = useDispatch();

    
    const onChange = (value: string) => {
      console.log(cryptos?.length)
      getCryptoValue(dispatch);
    };

    const cryptoBuySelector = (
        <Form.Item name="offer_buy" noStyle>
            <Select
                showSearch
                placeholder="Select"
                // defaultValue="usd"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                style={{width: '120px'}}
                options={listCryptos}
            />
        </Form.Item>
    );

    const cryptoSellSelector = (
        <Form.Item name="crypto" noStyle>
            <Select
                showSearch
                placeholder="Select"
                // defaultValue="btc"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                style={{width: '120px'}}
                options={listCryptos}
            />
        </Form.Item>
    );

    

    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
  };  

  useEffect(() => {
    if(!cryptos?.length){
      getCryptoValue(dispatch);

    } else {
      let newArray = cryptos?.reduce((accum:any, curValue:any) => {
        accum.push({label: curValue.name, value:curValue.slug});
        return accum;
      }, []);
      setListCryptos(newArray);
    }
    console.log(listCryptos)
    
  },[])
    
  return (
    <>
      <Form
      layout="vertical"
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="spend"
        label="Spend"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
        style={{marginBottom: '35px'}}
      >
        <InputNumber addonAfter={cryptoBuySelector} style={{ width: '100%' }} />
      </Form.Item>
      
      
      <Form.Item
        name="receive"
        label="Receive"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
        style={{marginBottom: '25px'}}
      >
        <InputNumber addonAfter={cryptoSellSelector} style={{ width: '100%' }} />
      </Form.Item>

      <div style={{marginTop: '54px'}}>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block>
          Buy
        </Button>
      </Form.Item>
      </div>
    </Form>
    </>
  )
}

export default BuyCryptoForm

'use client'
import { Button, Col, Form, Input, List, Row, message } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { EditOutlined } from '@ant-design/icons';
import AdminLayout from '@/components/layouts/AdminLayout';
import { useDispatch, useSelector } from 'react-redux';

const currency = () => {
  const dispatch = useDispatch();
    // state
    const [loading, setLoading] = useState(false);
    // update state
    const [itemList, setItemList]:any = useState({});
    // hooks
    const [form] = Form.useForm();
  
    const { cryptos } = useSelector((state:any) => state.crypto);
  
    useEffect(() => {
      // getCategories(dispatch);
      setItemList(cryptos)
    }, [cryptos]);
  
  
    const onFinish = async (values:any) => {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/cryptos/add_news", {...values, slug: values.name.toLowerCase()});
        setItemList((prev:any) => ({ ...prev, itemList: [data, ...itemList] }));
        message.success("Category created successfully");
        setLoading(false);
        form.resetFields(["name"]);
      } catch (err:any) {
        message.error("Category create failed");
        setLoading(false);
      }
    };
  
    const handleDelete = (item:any) => {
      console.log('has click delete!')
    };
  

  return (
    <>
      <AdminLayout>
      <Row>
        {/* first column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <h1>Currencies</h1>
          <p>Add new crypto-currencies</p>

          <Form onFinish={onFinish} form={form}>
            <Form.Item name="name">
              <Input
                prefix={<EditOutlined className="site-form-item-icon" />}
                placeholder="Give it a name"
              />
            </Form.Item>
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </Col>
        {/* second column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          
          <List
            itemLayout="horizontal"
          >
            {cryptos?.map((item:any) => (
            <List.Item
              key={item._id}
                actions={[
                  <a>edit</a>,
                  <a>delete</a>,
                ]}
              >
                <List.Item.Meta title={item.name} />
              </List.Item>
          ))

          }
              
            
          </List>
        </Col>

      </Row>
      </AdminLayout>
    </>
  )
}

export default currency

'use client'
import React, { useEffect, useState } from 'react';
import { Form, Table, Input, Layout, Row, Col, Select } from 'antd';
import type { GetProp, TableProps } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const { Option } = Select;

type ColumnsType<T> = TableProps<T>['columns'];
type TablePaginationConfig = Exclude<GetProp<TableProps, 'pagination'>, boolean>;

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, 'onChange'>>[1];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});


export default function DataTable() {
    const [form] = Form.useForm();
    const [data, setData] = useState<DataType[]>();
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
      pagination: {
        current: 1,
        pageSize: 10,
      },
    });
  
    const fetchData = () => {
      // setLoading(true);
      // fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      //   .then((res) => res.json())
      //   .then(({ results }) => {
      //     setLoading(false);
      //     setTableParams({
      //       ...tableParams,
      //       pagination: {
      //         ...tableParams.pagination,
      //         total: 200,
      //       },
      //     });
      //     setData(results);
      //   });
    };
  
    useEffect(() => {
      fetchData();
    }, [JSON.stringify(tableParams)]);
  
    const handleTableChange: TableProps['onChange'] = (pagination, filters, sorter) => {
      setTableParams({
        pagination,
        filters,
        ...sorter,
      });
  
      // `dataSource` is useless since `pageSize` changed
      if (pagination.pageSize !== tableParams.pagination?.pageSize) {
        setData([]);
      }
    };
    const onFinish = (values: any) => {
        console.log('Finish:', values);
      };
  
  return (
    <>
        <Row gutter={[16, 24]}>
          <Col span={24}>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
              <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
              >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </Form.Item>
                
              <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Select defaultValue="Zhejiang" allowClear style={{ width: 180 }}>
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                </Select>                
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <Table
              columns={columns}
              rowKey={(record) => record.login.uuid}
              dataSource={data}
              pagination={tableParams.pagination}
              loading={loading}
              onChange={handleTableChange}
            />
          </Col>
        </Row>

    </>
  )
}

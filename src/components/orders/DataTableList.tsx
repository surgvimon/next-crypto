'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';

type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    buyer: string;
    seller: string;
    offer_buy: string;
    offer_sell: string;
    amount_btn: string;
    amount_buy: string;
  }

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  buyer: string;
  seller: string;
  offer_buy: string;
  offer_sell: string;
  amount_btn: string;
  amount_buy: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const DataTableList = () => {


    const [dataSource, setDataSource] = useState<DataType[]>([
        {
          key: '0',
          buyer: 'Urer name 1',
          seller: 'Sell name 1',
          offer_buy: 'PLD',
          offer_sell: 'BTC',
          amount_btn: '0.02',
          amount_buy: '0.85',
        },
        {
          key: '1',
          buyer: 'Urer name 2',
          seller: 'Sell name 2',
          offer_buy: 'PLD',
          offer_sell: 'BTC',
          amount_btn: '0.01',
          amount_buy: '0.35',
        },
      ]);
    
      const [count, setCount] = useState(2);
    
      const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
      };
    
      const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
        {
          title: 'buyer',
          dataIndex: 'buyer',
          width: '25%',
          editable: true,
        },
        {
          title: 'seller',
          width: '25%',
          dataIndex: 'seller',
        },
        {
            title: 'offer buy',
            dataIndex: 'offer_buy',
          },
          {
            title: 'offer sell',
            dataIndex: 'offer_sell',
          },
          {
            title: 'amount btn',
            dataIndex: 'amount_btn',
          },
          {
            title: 'mount usd',
            dataIndex: 'amount_buy',
          },

            {
          title: 'operation',
          dataIndex: 'operation',
          render: (_, record: { key: React.Key }) =>
            dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                <a>Delete</a>
              </Popconfirm>
            ) : null,
        },
      ];
    
      const handleAdd = () => {
        const newData: DataType = {
          key: count,
          buyer: `Buyer No. ${count}`,
          seller: `Seller No. ${count}`,
          offer_buy: `BTC`,
          offer_sell: `USA`,
          amount_btn: `0.25`,
          amount_buy: `2000`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
      };
    
      const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
      };
    
      const components = {
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      };
    
      const columns = defaultColumns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: (record: DataType) => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave,
          }),
        };
      });
    
      return (
        <div>
          <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
            Add a row
          </Button>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={columns as ColumnTypes}
          />
        </div>
      ); 
    

}

export default DataTableList

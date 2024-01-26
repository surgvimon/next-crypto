'use client'
import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, Modal } from 'antd'
import React from 'react'

const CategoryUpdateModal = ({
    visible,
    setVisible,
    handleUpdate,
    updatingCategory,
  }:any) => {
  return (
    <>
    <Modal
      title="Update category"
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form
        onFinish={handleUpdate}
        fields={[{ name: ["name"], value: updatingCategory.name }]}
      >
        <Form.Item name="name">
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Give it a name"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
    
    </>
  )
}

export default CategoryUpdateModal

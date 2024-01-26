"use client";
import { Form, Input, Button, Checkbox, Col, Row, message, Radio } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, PoweroffOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function RegisterForm() {
    const router = useRouter();
    const [loadings, setLoadings] = useState(false);

    const onFinish = async (values:any) => {
        setLoadings(true);
        try {
        const response = await axios.post('/api/users/register', {...values, isAdmin: false});
        message.success(response.data.message);
        router.push('/signin')
        } catch (err:any) {
        setLoadings(false);
        message.error(err.response.data.message)
        } 
    };
  return (
    <Row>
      <Col span={16}>
        <h1 style={{ paddingTop: "80px" }}>Sign-up</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item 
            name="email" 
            rules={[{ type: "email", required: true, message: "Please input your email!"}]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loadings}
              icon={<PoweroffOutlined />}
            >
              Register
            </Button>
            <br />
            Or{" "}
            <Link href="/signin">
              <span>Login now!</span>
            </Link>
          </Form.Item>
        </Form>
        {/* <Divider style={{ borderWidth: 2, borderColor: '#d9d9d9' }}> OR </Divider>
        <SocialLogin/> */}
      </Col>
    </Row>
  )
}

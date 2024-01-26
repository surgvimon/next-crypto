"use client";
import { Form, Input, Button, Col, Row, Alert, Radio, message } from "antd";
import { LockOutlined, MailOutlined, PoweroffOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { getCurrentUser } from "@/services/user.service";


const SignIn = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loadings, setLoadings] = useState(false);
  const [error, setError] = useState();

  const onFinish = async (values:any) => {
    setLoadings(true);
    try {
      const response = await axios.post('/api/users/login', values);
      message.success(response.data.message)
      await getCurrentUser(dispatch);
      router.push('/crypto')
    } catch(error:any) {
      setLoadings(false);
      message.error(error.response.data.message || "Something went wrong")
    } 
  };

  return (
    <div>
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Sign-in</h1>
        {error &&
          <Alert
            message="Error Text"
            description={error}
            type="error"
            banner
          />
        }
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item name="email" rules={[{ type: "email" }]}>
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
              Login
            </Button>
            <br />
            Or{" "}
            <Link href="/signup">
              <span>Register now!</span>
            </Link>
          </Form.Item>

        </Form>
      </Col>
    </Row>
    </div>
  )
}

export default SignIn

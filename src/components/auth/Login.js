import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { toast } from 'react-toastify';
import logo from '../../assets/images/logo.png';

import { login } from '../../redux/authSlice';
import authAPI from '../../services/authAPI';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values) => {
    setLoading(true);

    const res = await authAPI.login(values);

    if (res !== undefined && /20[0-6]/g.test(res.status)) {
      dispatch(login(res.data));
      setTimeout(function () {
        setLoading(false);
        history.push('/dashboard/');
      }, 2000);
    } else {
      setLoading(false);
      if (res?.response?.data?.non_field_errors) {
        toast.error(res?.response?.data?.non_field_errors[0]);
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  return (
    <Row justify="center">
      <Col md={{ span: 9 }}>
        <Card className="login-card">
          <Row justify="center">
            <img src={logo} alt="Dashboard" width="200" />
          </Row>
          <br />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="Enter Your passwrod" />
            </Form.Item>

            <Form.Item>
              <Row justify="center">
                <Button type="primary" htmlType="login" loading={loading}>
                  Submit
                </Button>
              </Row>
            </Form.Item>
          </Form>
          <div className="text-center">v0.0.1</div>
        </Card>
      </Col>
    </Row>
  );
}

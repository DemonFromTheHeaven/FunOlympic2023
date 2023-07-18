import React from 'react';
import { Form, Input, Row, Col, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Newlogin = () => {
    const history = useNavigate();
    const url = 'http://localhost:3000/user/login';

    const login = async (data) => {
        try {
            const response = await axios.post(url, data);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const onFinish = (values) => {
        login({
            email: values.email,
            password: values.password
        })
            .then((data) => {
                localStorage.setItem('User', JSON.stringify(data.user));
                localStorage.setItem('token', data.token);

                console.log(data.token);
                history("/");
                message.success('Successfully Logged In');
            })
            .catch((error) => {
                if (error.response) {
                    message.error('User login failed!');
                    message.error(error.response.data.message);
                    console.error(error.response.data);
                } else if (error.request) {
                    message.error('User login failed: No response from the server');
                    console.error(error.request);
                } else {
                    message.error('User login failed: Error occurred');
                    console.error('Error:', error.message);
                }
            });
    };

    return (
        <Row
            className="form"
            justify="center"
            align="middle"
            style={{
                height: "91vh",
            }}
        >
            <Col
                xs={24}
                sm={18}
                md={16}
                lg={8}
                xl={8}
                xxl={6}
                style={{
                    backgroundColor: "white",
                    boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.0784313725490196)",
                    padding: "1em 2em",
                }}
            >
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <Form
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                    layout="vertical"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, message: "Email is required" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: "Password is required" }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center" }}>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Login
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'right', color: '#1877f2' }}>
                        <span>
                            <a onClick={() => history("/forgotpassword")}>Forgot Password?</a>
                        </span>
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <span>
                            Need an account?{" "}
                            <a onClick={() => history("/signup")} style={{ color: 'blue' }}>Sign Up</a>
                        </span>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Newlogin;

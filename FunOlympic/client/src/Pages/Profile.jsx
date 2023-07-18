import React, { useState } from 'react';
import { Tabs, Form, Input, Button, Typography, Alert } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddNews from '../components/admin/AddNews';
import AddLive from '../components/admin/AddLive';
import LiveController from '../components/admin/LiveController';
import DeleteNews from '../components/admin/DeleteNews';
import DisableUser from '../components/admin/DisableUser';
import Message from '../components/admin/Message';


const { TabPane } = Tabs;

const { Title } = Typography;

const Profile = () => {
    const history = useNavigate();
    const [form] = Form.useForm();
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleFormSubmit = async (values) => {
        try {
            const response = await axios.post('http://localhost:3000/user/changepassword', {
                userId: user._id,
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
            });
            setSuccessMessage(response.data.message);
            form.resetFields();
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    const handlelogout = () => {
        // localStorage.setItem('Loggedin', null);
        // console.log(localStorage.getItem('Loggedin'));
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        localStorage.clear();
        history('/login');
    }

    const user = JSON.parse(localStorage.getItem('User'));
    console.log(user);




    return (
        <div className="block aboutPage">
            <div className="container">
                <Title level={2}>Profile Page</Title>
                <Button type='primary' danger onClick={handlelogout}> Logout</Button>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="About" key="1">
                        <h6>Name</h6>
                        <p> <span> {user.firstName}</span> <span>{user.lastName}</span></p>
                        <h6>Username</h6>
                        <p> <span> {user.username}</span></p>
                        <h6>Email</h6>
                        <p> <span> {user.email}</span></p>
                        <h6>Are you Verified?</h6>
                        <p> <span> Yes</span></p>
                        <h6>Role</h6>
                        <p> <span>{user.roles}</span></p>
                    </TabPane>


                    <TabPane tab="Change Password" key="2">
                        <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>

                            <Form form={form} onFinish={handleFormSubmit}>
                                <Form.Item
                                    label="Current Password"
                                    name="currentPassword"
                                    rules={[{ required: true, message: 'Please enter your current password' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label="New Password"
                                    name="newPassword"
                                    rules={[{ required: true, message: 'Please enter a new password' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label="Confirm New Password"
                                    name="confirmNewPassword"
                                    dependencies={['newPassword']}
                                    rules={[
                                        { required: true, message: 'Please confirm your new password' },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('newPassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('New passwords do not match'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                {error && <Alert type="error" message={error} />}
                                {successMessage && <Alert type="success" message={successMessage} />}
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Change Password
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div></TabPane>


                    {user.roles != 'user' ? (<>
                        <TabPane tab="AddNews" key='3'><AddNews /></TabPane>
                        <TabPane tab='AddLive' key='4'><AddLive /></TabPane>
                        <TabPane tab=' Live Controller' key='5'><LiveController /></TabPane>
                        <TabPane tab='Delete News' key='6'><DeleteNews /></TabPane>
                        <TabPane tab='Disable User' key='7'><DisableUser /></TabPane>
                        <TabPane tab="Message" key='8'><Message /></TabPane>
                    </>) : (<></>)}


                </Tabs>
            </div>
        </div>

    );
};

export default Profile;

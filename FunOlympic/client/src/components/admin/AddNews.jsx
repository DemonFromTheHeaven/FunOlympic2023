import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddNews = () => {
    const [image, setImage] = useState('');

    const url = 'http://localhost:3000/news/add'
    const news = async (data) => {
        try {
            const response = await axios.post(url, data);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const onFinish = (values) => {
        news({
            title: values.title,
            photo: image,
            type: values.type,
            description: values.description
        })
            .then((data) => {


                message.success('Successfully Uploaded '); // Display the message from the backend
            })
            .catch((error) => { console.log(error) });
        // Clear form and file list
        form.resetFields();
        setFileList([]);
    };


    function converttobase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);

        };
        reader.onerror = (error) => {
            console.log(error);
        }

    }


    return (
        <Form onFinish={onFinish}>
            <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter the title' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="photo"
                label="Photo"

                valuePropName="fileList"

            >
                <input accept='image/' type='file' onChange={converttobase64} />


            </Form.Item>

            <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please Add what type of news it is.' }]}
            >
                <Input />

            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please enter the description' }]}
            >
                <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add News
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddNews;

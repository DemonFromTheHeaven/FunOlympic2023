import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddLive = () => {
    const [image, setImage] = useState('');

    const url = 'http://localhost:3000/live/add'
    const live = async (data) => {
        try {
            const response = await axios.post(url, data);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const onFinish = (values) => {
        live({
            title: values.title,
            photo: image,
            link: values.link,
            game: values.game,
            team1: values.team1,
            team2: values.team2,
            startDate: values.startDate,
            description: values.description
        })
            .then((data) => {


                message.success('Successfully Uploaded '); // Display the message from the backend
            })
            .catch((error) => { console.log(error) });
        // Clear form and file list

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
                name="link"
                label="Link"
                rules={[{ required: true, message: "Link is required" }]}
            >
                <Input />

            </Form.Item>
            <Form.Item
                name="game"
                label="Game"
                rules={[{ required: true, message: 'Please Add Link to Game' }]}
            >
                <Input />

            </Form.Item>
            <Form.Item
                name="team1"
                label="Team 1"
                rules={[{ required: true, message: 'Please Add Link to Game' }]}
            >
                <Input />

            </Form.Item>
            <Form.Item
                name="team2"
                label="Team 2"
                rules={[{ required: true, message: 'Please Add Link to Game' }]}
            >
                <Input />

            </Form.Item>
            <Form.Item
                name="startDate"
                label="Start Date"
                rules={[{ required: true, message: 'Please enter the description' }]}
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
                    Add Live
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AddLive;

import { Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';




const Message = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/message')
            .then(response => {
                console.log(response.data);
                setdata(response.data.message);

            })
            .catch(err => {
                console.log('Error fetching data:', err);
            });
    }, []);

    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>Message</h2>
                </div>
                <Row gutter={[24, 24]}>
                    {data ? data.map(d => (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                            <div className="content">
                                <h4>{d.fullname}</h4>
                                <div className="price">{d.email}</div>
                                <p>{d.message}</p>
                            </div>
                        </Col>
                    )) : ''}
                </Row>
            </div>
        </div>
    );
}


export default Message;
import { Col, Row, Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import image1 from '../../assets/images/img1.jpg';



const DeleteNews = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/news/get').then(response => {
            setdata(response.data);
            // console.log(response.data);
            // console.log(response.data[0].Title);
        }).catch(err => {
            console.log('error fetching data')
        })
    }, [])

    // console.log(data);
    // console.log(data.length);
    // if (data.length > 0) {
    //     console.log(data[1].id);
    // }

    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>News</h2>

                </div>
                <Row gutter={[24, 24]}>
                    {data.map(d => (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                            <div className="content">
                                <div className="image">
                                    <img src={d.photo ? d.photo : image1} alt="product" />
                                </div>
                                <h3>{d.title}</h3>
                                <div className="price">{d.type}</div>
                                <p>{d.description}</p>

                                <Link to={`/profile/deletenews/${d._id}`}> <Button type="primary">Delete</Button></Link>
                            </div>
                        </Col>
                    ))}


                </Row>

            </div>
        </div>
    );
}

export default DeleteNews;
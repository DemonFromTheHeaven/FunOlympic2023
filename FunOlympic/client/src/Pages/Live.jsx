import { Col, Row, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image1 from '../assets/images/img1.jpg';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Live = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/live/get').then(response => {
            setdata(response.data);
            console.log(response.data);
            // console.log(response.data[0].title);
        }).catch(err => {
            console.log('error fetching data')
        })
    }, [])

    var cdate = new Date();
    cdate = cdate.toISOString();
    // console.log(cdate);

    // console.log(data);
    // console.log(data.length);
    // if (data.length > 0) {
    //     console.log(data[1].title);
    // }

    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>Live</h2>

                </div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Live" key="1">
                        <Row gutter={[24, 24]}>
                            {data.map(d => d.islive && d.startDate <= cdate ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                                    <div className="content">
                                        <div className="image">
                                            <img src={d.photo ? d.photo : image1} alt="product" />
                                            {/* {cdate >= d.startDate ? console.log('upcoming', d.startDate) : console.log('old', d.startDate)} */}
                                        </div>
                                        <h3>{d.title}</h3>
                                        <div className="price">{d.team1} vs {d.team2}</div>
                                        <p>{d.game}</p>
                                        <p>{d.startDate}</p>
                                        <Link to={`/live/${d._id}`}>
                                            <Button type="primary">Watch</Button>
                                        </Link>
                                    </div>
                                </Col>
                            ) : '')}


                        </Row>
                    </TabPane>
                    <TabPane tab="Old" key="2">
                        <Row gutter={[24, 24]}>
                            {data.map(d => !d.islive && d.startDate <= cdate ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                                    <div className="content">
                                        <div className="image">
                                            <img src={d.photo ? d.photo : image1} alt="product" />
                                        </div>
                                        <h3>{d.title}</h3>
                                        <div className="price">{d.team1} vs {d.team2}</div>
                                        <p>{d.game}</p>
                                        <p>{d.startDate}</p>
                                        <Link to={`/live/${d._id}`}>
                                            <Button type="primary">Watch</Button>
                                        </Link>
                                    </div>
                                </Col>
                            ) : '')}


                        </Row>
                    </TabPane>
                    <TabPane tab="Upcoming" key="3">
                        <Row gutter={[24, 24]}>
                            {data.map(d => !d.islive && d.startDate > cdate ? (
                                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                                    <div className="content">
                                        <div className="image">
                                            <img src={d.photo ? d.photo : image1} alt="product" />
                                        </div>
                                        <h3>{d.title}</h3>
                                        <div className="price">{d.team1} vs {d.team2}</div>
                                        <p>{d.game}</p>
                                        <p>{d.startDate}</p>
                                        {/* <Link to={`/live/${d._id}`}> */}
                                        {/* <Button type="primary">Watch</Button> */}
                                        {/* </Link> */}
                                    </div>
                                </Col>
                            ) : '')}


                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Live;
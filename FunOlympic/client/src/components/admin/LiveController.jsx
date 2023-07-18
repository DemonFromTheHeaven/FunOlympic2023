import { Col, Row, Button } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image1 from '../../assets/images/img1.jpg';

const LiveController = () => {

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

    // console.log(data);
    // console.log(data.length);
    const handleLiveUnlive = (id) => {
        console.log(id);
        try {
            axios.put(`http://localhost:3000/live/liveunlive/${id}`).then(response => {
                console.log(response.data);
            })

        } catch (error) {
            console.log('Error sending data');

        }
    }

    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>Live</h2>
                </div>
                <Row gutter={[24, 24]}>
                    {data.map(d => (
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={d.key}>
                            <div className="content">
                                <div className="image">
                                    <img src={d.photo ? d.photo : image1} alt="product" />
                                </div>
                                <h3>{d.title}</h3>
                                <div className="price">{d.team1} vs {d.team2}</div>
                                <p>{d.game}</p>
                                <p>{d.startDate}</p>
                                <Link to={`/profile/deletelive/${d._id}`}>
                                    <Button type="primary" danger >Delete</Button>
                                </Link>
                                <Button type="primary" onClick={() => { handleLiveUnlive(d._id) }} >{d.islive ? "UnLive" : "Live"}</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
export default LiveController;
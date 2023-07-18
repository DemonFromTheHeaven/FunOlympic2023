import { Col, Row, Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const DisableUser = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/getall').then(response => {
            setdata(response.data.users);
            console.log(response.data);
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
                                <p>{d.email}</p>
                                <div className="price">{d.firstName} {d.lastName}</div>
                                <p>{d.roles}</p>
                                <p>{d.enabled ? "Enabled" : "Disabled"}</p>

                                <Link to={`/profile/disableorenable/${d._id}`}> <Button type="primary">{d.enabled ? "Disable" : "Enable"}</Button></Link>
                            </div>
                        </Col>
                    ))}


                </Row>

            </div>
        </div>
    );
}

export default DisableUser;
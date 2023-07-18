import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LiveDetail = () => {
    const { id } = useParams();
    const [Live, setLive] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/live/get/${id}`).then((response) => {
            setLive(response.data);
        });
    }, [id]);

    if (!Live) {
        return <p>Loading...</p>;
    }

    const currentdate = new Date();


    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>Live</h2>

                </div>
            </div>

            <div style={{ width: '50vh', margin: 'auto' }}>

                <h2>{Live.title}</h2>
                <p>{Live.description}</p>
                {console.log(Live.startDate < currentdate)}
                {Live.startDate > currentdate ? <h1>Game hasn't started yet.</h1> : <iframe width="560" height="315" src={Live.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                }

            </div>
        </div>
    );
};

export default LiveDetail;
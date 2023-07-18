import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/news/get/${id}`).then((response) => {
            setNews(response.data);
        });
    }, [id]);

    if (!news) {
        return <p>Loading...</p>;
    }

    return (
        <div className='block products shopPage'>
            <div className='container'>
                <div className='titleHolder'>
                    <h2>News</h2>

                </div>
            </div>

            <div style={{ width: '50vh', margin: 'auto' }}>
                <h2>{news.title}</h2>
                <div className="image">
                    <img src={news.photo ? news.photo : ""} alt="newsphoto" />
                </div>
                <p>{news.description}</p>
            </div>
        </div>
    );
};

export default NewsDetail;
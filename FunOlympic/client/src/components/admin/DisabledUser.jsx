import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisabledUser = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.put(`http://localhost:3000/user/disableorenable/${id}`).then((response) => {
            console.log(response.data);

        });
    }, [id]);



    return (
        <div className='block products shopPage'>
            <h1>   Done!! </h1>
        </div>

    );
};

export default DisabledUser;
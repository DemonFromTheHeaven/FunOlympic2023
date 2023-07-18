import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeletedLive = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.delete(`http://localhost:3000/live/${id}`).then((response) => {

        });
    }, [id]);



    return (
        <div className='block products shopPage'>
            <h1>    Deleted!!!!</h1>
        </div>

    );
};

export default DeletedLive;
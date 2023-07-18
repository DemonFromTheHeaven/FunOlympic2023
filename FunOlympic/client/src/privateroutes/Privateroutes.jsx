import React, { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Privateroutes = () => {
    const [auth, setAuth] = useState({ token: false });
    // const [token, settoken] = useState();
    // const loggedin = localStorage.getItem('Loggedin');

    const tokeen = localStorage.getItem('token');


    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token != '') {
    //         setAuth({ token: true });
    //     } else {
    //         setAuth({ token: false });
    //     }
    // }, []);

    // console.log(auth.token);
    // console.log(tokeen);
    return tokeen ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroutes;
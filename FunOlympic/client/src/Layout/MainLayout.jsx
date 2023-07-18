import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {

    return (<div style={{ display: 'flex-row', width: '100vw', margin: 'auto' }}>
        <Navbar />
        <div style={{ minHeight: '100vh', width: 'auto' }}>

            <Outlet />
        </div>
        <Footer />

    </div>);
};

export default Main;

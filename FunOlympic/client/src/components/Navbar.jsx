import { NavLink } from "react-router-dom";
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

import {
    MobileOutlined,
    MailOutlined,
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
    UserOutlined,
    MenuOutlined
} from '@ant-design/icons';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='container'>
            {/* topbar */}
            <div className='topBar'>
                <div className='contactInfo'>
                    <ul>
                        <li><a href="tel:+977-9840147291"><MobileOutlined /> <span>+977-9840147291</span></a></li>
                        <li><a href="mailto:funolympics@yokyo.com"><MailOutlined /> <span>funolympics@yokyo.com</span></a></li>
                    </ul>
                </div>
                <div className='otherInfo'>
                    <ul className='socialMedia'>
                        <li><a href='https://www.fb.com'><FacebookFilled /></a></li>
                        <li><a href='https://www.twitter.com'><TwitterSquareFilled /></a></li>
                        <li><a href='https://www.instagram.com'><InstagramFilled /></a></li>
                    </ul>
                    <button><UserOutlined /> <NavLink to={'/profile'}> My Account</NavLink></button>
                </div>
            </div>
            {/* header */}
            <div className='header separator'>
                <div className="logo">
                    FUN OLYMPIC
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <MenuOutlined />
                    </Button>
                    <Drawer placement="right" onClose={onClose} visible={visible}>
                        <nav>
                            <ul>
                                <li><NavLink onClick={onClose} to="/">Home</NavLink></li>
                                <li><NavLink onClick={onClose} to="/about">About</NavLink></li>
                                <li><NavLink onClick={onClose} to="/live">Live</NavLink></li>

                                <li><NavLink onClick={onClose} to="/news">News</NavLink></li>
                                <li><NavLink onClick={onClose} to="/contact">Contact</NavLink></li>

                            </ul>
                        </nav>
                    </Drawer>
                </div>
                <nav className="mobileHidden">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/Live">Live</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
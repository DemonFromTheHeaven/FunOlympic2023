import React from 'react';
import Hero from '../components/home/hero';
import HomeNews from '../components/home/HomeNews';
import SportsCategories from '../components/home/SportsCategories';
import TopBrands from '../components/home/topBrands';
import HomeLive from '../components/home/HomeLive';

const Homepage = () => {
    return (
        <div className='container'>
            <Hero />
            <SportsCategories />
            <HomeNews />
            <HomeLive />
            <TopBrands />
        </div>
    );
}

export default Homepage;
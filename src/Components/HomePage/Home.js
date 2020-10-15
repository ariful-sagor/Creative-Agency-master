import React from 'react';
import Header from './Header/Header';
import Companies from './Companies/Companies';
import OurServices from './OurServices/OurServices';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';
import Contact from './Contact/Contact';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <OurServices></OurServices>
            <OurWorks></OurWorks>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import Header from './Header/Header';
import Companies from './Companies/Companies';
import OurServices from './OurServices/OurServices';
import OurWorks from './OurWorks/OurWorks';
import Review from './Review/Review';
import Contact from './Contact/Contact';
import { UserContext } from '../../App';

const Home = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    console.log(loggedInUser)
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
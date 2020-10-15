import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Admin.css';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import Sidebar from '../../CustomerPage/Sidebar';

const Admin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [display, setDisplay] = useState(<AddService />)

    return (
        <section id="customer">
            <div className="navbar d-flex justify-content-between py-3 px-0 px-sm-5">
                <Link to="/">
                    <img src={logo} width="120px" alt=""/>
                </Link>
                <span className="h4">{loggedInUser.name}</span>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar setDisplay={setDisplay} />
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default Admin;
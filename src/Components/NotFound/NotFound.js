import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';

const NotFound = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div style={{justifyContent: 'center', margin:'30px 30px'}}>
                <img style={{width: '100%', height: '100%'}} src="https://miro.medium.com/max/4038/1*uVW5KIjt28G-gEsrjqArRw.jpeg" alt="not found"/>
            </div>
        </div>
    );
};

export default NotFound;
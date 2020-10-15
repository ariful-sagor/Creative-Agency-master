import React, { useEffect, useState } from 'react';
import './OurServices.css'
import { Link } from 'react-router-dom';

const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
        })
    }, [])
    return (
        <section id="services">
            <div className="container py-5 my-md-5 text-center">
                <h2>We Provide Awesome <b style={{color: '#7ab259'}}>Services</b></h2>
                <div className="row mt-5">
                    <Link to="/customer" style={{textDecoration: 'none'}}>
                        <div className="col-md-12 col-sm-12 col-lg-12 my-3 ">
                            <div className="py-3 px-4 rounded">
                                <div className="row text-left">                               
                                    {
                                        services.map(service =>                                                    
                                            <div className="p-3 serviceCard text-center col-sm-12 col-md-4 col-4">
                                                <img className="icon" src={`data:image/png;base64,${service.image.img}`} alt="" width="70px" />
                                                <h4 className="my-3 text-dark">{service.service}</h4>
                                                <p className="text-secondary">{service.description}</p>
                                            </div>                                                    
                                            )
                                    }                                           
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurServices;


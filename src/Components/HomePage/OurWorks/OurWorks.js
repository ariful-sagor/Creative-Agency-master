import React from 'react';
import './OurWorks.css'
import image1 from '../../../Images/carousel-1.png';
import image2 from '../../../Images/carousel-2.png';
import image3 from '../../../Images/carousel-3.png';
import image4 from '../../../Images/carousel-4.png';


const OurWorks = () => {
    return (
        <section id="works" className="py-5 mt-md-5">
            <h3 className="text-center text-white">Here are some of our <b style={{color:'#7ab259'}}>Works</b></h3>
            <div className="container py-5">
                
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={image2} className="d-block w-100" alt="..." />
                        </div>
                        
                        <div className="carousel-item">
                            <img src={image4} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;
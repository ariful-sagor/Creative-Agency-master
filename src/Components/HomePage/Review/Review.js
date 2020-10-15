import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data =>{
            setReviews(data);
        })
    }, [])
    return (
        <section id="services">
            <div className="container py-5 my-md-5 text-center ">
                <h2>Client's <b style={{color: '#7ab259'}}>Feedback</b></h2>
                <div className="row mt-5 ">
                    <div className="col-md-12 col-lg-12 my-3">
                        <div className="py-3 px-4 rounded">
                            <div className="row text-left">
                                {
                                    reviews.map(review =>
                                        <div className="col-3 col-sm-12 col-md-3 border p-5  ml-4 mr-4 mb-4">
                                            <h4>{review.name}</h4>
                                            <h6>{review.company}</h6>
                                            <p>{review.review}</p>
                                        </div>
                                    )
                                }                                                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Review;
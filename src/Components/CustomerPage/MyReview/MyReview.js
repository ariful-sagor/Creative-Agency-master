import React, { useState } from 'react';


const MyReview = () => {
    const [info, setInfo]= useState({});

    const handleBlur= e =>{
        const newInfo ={...info};
        newInfo[e.target.name]= e.target.value;
        setInfo(newInfo);
        console.log(newInfo);
    }
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('name',info.name)
        formData.append('company',info.company)
        formData.append('review',info.review)
        
        fetch("http://localhost:5000/addReview",{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        .catch(err =>{
            console.log(err)
        })
        alert('Review Added Successfully')   

    }
    return (
        <section id="myReview" className="p-4">
            <div className="container">
                <h3>Review</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onBlur={handleBlur} name="name" placeholder="Your name" className="form-control my-3" required />
                            <input type="text" name="company" onBlur={handleBlur} placeholder="Company's name, Designation" className="form-control bg-white my-3" required />
                            <textarea name="review" placeholder="Your review" onBlur={handleBlur} className="form-control my-3" cols="30" rows="10" required></textarea>
                            <button style={{backgroundColor:' #111430', color:'white'}} className="btn px-4">Send Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReview;
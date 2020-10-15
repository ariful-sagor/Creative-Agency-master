import React, { useState } from 'react';

const AddService = () => {
    const [info, setInfo]= useState({});
    
    const handleBlur= e =>{
        const newInfo ={...info};
        newInfo[e.target.name]= e.target.value;
        setInfo(newInfo);        
    }
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('email',info.email);        
        
        fetch("https://radiant-wildwood-03529.herokuapp.com/addAdmin",{
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
        <section className="p-4">
            <div className="container">
                <h3>Order</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form onSubmit={handleSubmit}>                            
                            <input type="email" onBlur={handleBlur} name="email" placeholder="Your email" className="form-control my-3" required />
                            <button style={{ backgroundColor: '#009444', color: 'white'}} className="btn h-100 mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;
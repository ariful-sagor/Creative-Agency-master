import React, { useState } from 'react';


const Order = () => {
    const [info, setInfo]= useState({});
    const [file, setFile] = useState(null);

    const handleBlur= e =>{
        const newInfo ={...info};
        newInfo[e.target.name]= e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file',file)
        formData.append('name',info.name)
        formData.append('email',info.email)
        formData.append('description',info.description)
        formData.append('service',info.service)

        fetch("https://radiant-wildwood-03529.herokuapp.com/addOrder",{
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
        alert('Order Added Successfully');
       
    }

    return (
        <section id="order" className="p-4">
            <div className="container">
                <h3>Order</h3>
                <div className="row">
                    <div className="col-md-9 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" onBlur={handleBlur} placeholder="Your name / company's name" className="form-control my-3"  required />
                            <input type="email" name="email" onBlur={handleBlur} placeholder="Your email" className="form-control my-3" required />
                            <input type="text" name="service" onBlur={handleBlur} placeholder="Title" className="form-control my-3"  required />
                            <textarea name="description" onBlur={handleBlur} placeholder="Project description" className="form-control my-3" cols="30" rows="10" required></textarea>
                            <div className="row my-3">
                                <div className="col-6">
                                    <input type="number"  name="price" placeholder="Your budget ($)" className="form-control" required />
                                </div>
                                <div className="col-6">
                                    <div class="form-group">                                        
                                        <input type="file" className="file-input" onChange={handleFileChange}/>
                                    </div>
                                </div>
                            </div>
                            <button style={{backgroundColor:' #111430', color:'white', width:'150px'}} className="btn px-4" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;
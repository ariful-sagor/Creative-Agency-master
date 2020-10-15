import React, { useState } from 'react';

const AddService = () => {

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
        formData.append('description',info.description)
        formData.append('service',info.service)

        fetch("http://localhost:5000/addService",{
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
        alert('Service Added Successfully')  
    }

    return (
        <section id="order" className="p-4">
            <h3>Add Service</h3><br />
            <div className="container">                
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-9 col-lg-6">                    
                            <input type="text" onBlur={handleBlur} name="service" placeholder="Service title" className="form-control my-3" required /> 
                            <textarea name="description" onBlur={handleBlur} placeholder="Description" className="form-control my-3" cols="30" rows="10" required></textarea>                           
                        </div>
                        <div className="col-md-3 col-lg-6"><br />                                                                 
                            <div className="col-6">
                                <input type="file" onChange={handleFileChange} name="photo" />
                            </div> <br />                                                    
                            <button  className="btn btn-success ml-3 px-4">Submit</button>                            
                        </div>
                    </div>
                </form>            
            </div>
        </section>
    );
};

export default AddService;
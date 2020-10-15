import React, { useEffect, useState } from 'react';
import MyService from './MyService';

const MyServices = () => {
    
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('https://radiant-wildwood-03529.herokuapp.com/orders')
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
        })
    }, [])
    console.log(orders);

    return (
        <section id="myServices" className="p-4">
            <div className="container">
                <h3>My Services</h3>                                           
                    {
                        orders.map(order =>  <MyService order={order}></MyService>)
                    }                   
           </div>
        </section>
    );
};

export default MyServices;
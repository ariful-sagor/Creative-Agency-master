import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ServiceList.css';

const ServiceList = () => {
    const [orders, setOrders] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data =>{
            setOrders(data);
        })
    }, [])
    console.log(orders);

    const [serviceStatus, setServiceStatus] = useState('Pending');

    const handleChange = e => setServiceStatus(e.target.value);

    return (
        <div>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Product Details</th>
                            <th className="text-center">status</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order =>                    
                            <tbody>
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.service}</td>
                                    <td>{order.description}</td>
                                    <td className="text-center">
                                        <div class="input-group">
                                            <select class="custom-select"  onChange={handleChange}>
                                                <option selected='selected' value="Pending" className="red">Pending</option>
                                                <option value="Ongoing" className="yellow">On going</option>
                                                <option value="Done" className="green">Done</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            )
                        }
                    
                </Table>
            </div>
        </div>
    );
};

export default ServiceList;
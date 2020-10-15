import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';

const MyService = (props) => {
    const {order}= props;
    const [loggedInUser, setLoggedInUser]= useContext(UserContext)
    
    return (
        <div>
            {
                loggedInUser.email == order.email && 
                    <Row>
                        <Col md={4} sm={12} style={{margin:'10px 10px', border:'1px solid white', borderRadius:'15px', background:'white'}} key={order._id}  id='task'>
                            <div>
                                <div className="rounded p-5">
                                {
                                    order.image ? <img style={{height: '60px'}} src={`data:image/png;base64,${order.image.img}`}/>
                                        :
                                        <img style={{height: '60px'}} className="img-fluid mb-3" src={`https://radiant-wildwood-03529.herokuapp.com/orders/${order.img}`} alt=""/>
                                }                                                           
                                </div>                                         
                                <h5><strong>{order.service}</strong></h5>
                                <p>{order.description}</p>                                            
                            </div>
                        </Col>
                    </Row>

            }
        </div>
    );
};

export default MyService;
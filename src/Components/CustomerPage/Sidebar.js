import React, { useContext, useEffect, useState } from 'react';
import MyServices from './MyServices/MyServices';
import Order from './Order/Order';
import MyReview from './MyReview/MyReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBasket, faCommentDots , faPlus, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import AddService from '../AdminPage/AddService/AddService';
import ServiceList from '../AdminPage/ServiceList/ServiceList';
import AddAdmin from '../AdminPage/AddAdmin/AddAdmin';
import { UserContext } from '../../App';


const Sidebar = ({setDisplay}) => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://radiant-wildwood-03529.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=> res.json())
        .then(data=>{
            setIsAdmin(data)
        })

    },[])
    const order = <Order />
    const services = <MyServices />
    const review = <MyReview />
    const addService = <AddService />
    const serviceList = <ServiceList />
    const admin = <AddAdmin />

    return (
        <aside>
            <div className="d-flex flex-md-column py-5 pl-2 pl-sm-4 pl-lg-5 align-items-start">
                
                {isAdmin && <div>
                    <button onClick={() => setDisplay(serviceList)}  className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />Service List
                        </span>
                    </button>
                    <button onClick={() => setDisplay(addService)} className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service
                        </span>
                    </button>
                    <button onClick={() => setDisplay(admin)} className="my-3 btn d-md-block">
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin
                        </span>
                    </button>
                </div>}
                 
                {isAdmin== false &&
                    <div>
                        <button onClick={() => setDisplay(order)} className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order
                        </span>
                    </button>
                    <button onClick={() => setDisplay(services)}  className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />Service List
                        </span>
                    </button>
                    <button onClick={() => setDisplay(review)} className="my-3 btn d-md-block">                    
                        <span className="h6 ml-2">
                            <FontAwesomeIcon icon={faCommentDots} className="mr-2" />Review
                        </span>
                    </button>
                 </div>
                 }
            </div>
        </aside>
    );
};

export default Sidebar;
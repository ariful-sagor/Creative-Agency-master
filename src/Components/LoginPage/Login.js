import React, {useContext} from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleLogo from '../../Images/googleLogo.png';
import logo from '../../Images/logo.png';
import { Form } from 'react-bootstrap';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

    
const Login = () => {
    const history= useHistory();
    const location= useLocation();
    const { from } = location.state || { from: { pathname: "/customer" } };


    if(firebase.apps.length=== 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res=>{
            console.log(res.user)
            const {displayName, email}= res.user;
            const signedInUser=  {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.push('/');
            console.log(signedInUser)
            
        }).catch(function(error) {
            
          });
          console.log(loggedInUser)
          

    }  
    
    return (
        <div>
            <div className="container" >
            <Link to="/">
                <img  src={logo} id="logo" href='/header' alt="logo" />
            </Link>
            <div id="login">
                <Form>
                    <h3 style={{textAlign:"center"}}>Login With</h3>
                    <br />
                    <a onClick={handleGoogleLogin}>
                        <div className="google">
                            <img src={googleLogo} alt="Google"></img>
                            <h5 style={{textAlign:"center"}}>Continue with Google</h5>
                        </div>
                    </a>
                    <br />
                    <h6 style={{textAlign:"center"}}>Don't have an account? <Link to="/register">Create an account</Link></h6>
                    </Form>
                </div>
        </div>
        </div>
    );
};

export default Login;

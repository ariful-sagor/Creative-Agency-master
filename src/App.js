import React, {useState, createContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/HomePage/Home';
import Login from './Components/LoginPage/Login';
import CustomerPage from './Components/CustomerPage/CustomerPage';
import PrivateRoute from './Components/LoginPage/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './Components/AdminPage/Admin/Admin';
import NotFound from './Components/NotFound/NotFound';


export const UserContext= createContext();
function App() {
  
  const [loggedInUser, setLoggedInUser]= useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>          
          <Route path="/login">
            <Login></Login>
          </Route>          
          <PrivateRoute path="/admin">
            <Admin></Admin>
            </PrivateRoute>       
          
          <PrivateRoute path="/customer">
              <CustomerPage />
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

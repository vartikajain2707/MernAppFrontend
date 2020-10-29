import React,{useState,useEffect} from 'react';
import './App.css';

import { BrowserRouter, Route,Switch, useHistory } from 'react-router-dom';

import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';

import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';



import Login from './Components/auth/Login';
import Register from './Components/auth/Register';

import UserContext from './Context/UserContext';

import Axios from 'axios'; 
import AuthOptions from './Components/auth/AuthOptions';

function App() {
  const history=useHistory();
  const [userData, setUserData]=useState({
    token:undefined,
    user:undefined
  });

  useEffect(() => {
    const checkLoggedIn=async ()=>{
      let token=localStorage.getItem('auth-token');
      if(token===null){
        localStorage.setItem('auth-token','');
        token='';
       
      }
      const tokenRes= await Axios.post(
        'http://localhost:3000/tokenIsValid',
        null,
        {headers:{'x-auth-token':token}}
      );
      if(tokenRes.data){
        const userRes=await Axios.get('http://localhost:3000/home',{
        headers:{'x-auth-token':token},
      });
      setUserData({
        token,
        user:userRes.data,
      });

      }
    
    };
  checkLoggedIn();
  },[]);

  return (

    
    <BrowserRouter>
        <UserContext.Provider value={{userData,setUserData}}>
          <Switch>
            <Route path='/' exact component={AuthOptions}></Route>
            <Route path='/cart' exact component={ Cart } />
            <Route path='/home' component={ Home } />
            <Route path='/signin' exact component={ Login } />
            <Route path='/shop/:id' exact component={ Menu } />
            <Route path='/profile/:id' exact component={ Profile } />
            <Route path='/search' exact component={ Search } />
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
          </Switch>
       
        </UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
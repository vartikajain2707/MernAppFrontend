import React, { useEffect, useState , useContext} from 'react';
import './Home.css';
import UserContext from '../../Context/UserContext';
import {useHistory} from 'react-router-dom'

import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ShopList from '../Shop/ShopList';


const Home = () => {
     const [shops, setShops] = useState([]);
     const{userData,setUserData}=useContext(UserContext);
     const history=useHistory();

     useEffect(() => {
          axios.get("http://localhost:3000/getShops/")
          .then((res) => {
               setShops(res.data);
          })
          .catch(err => {
               console.log(err);
          })

     }, []);

     const logout=()=>{
          history.push('/')
          setUserData({
              token:undefined,
              user:undefined
          });
          localStorage.setItem("auth-token","");
     };
     

     return (
          
          <div>
               <button className='home__logoutButton' onClick={logout}>LogOut</button>
               <Navbar />
               <ShopList shops={ shops } />
          </div>
     );
}

export default Home;
import React, { useEffect, useState } from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import ShopList from '../Shop/ShopList';

const Home = () => {
     const [shops, setShops] = useState([]);
     useEffect(() => {
          axios.get("https://mern-app-front.herokuapp.com/getShops/")
          .then((res) => {
               setShops(res.data);
          })
          .catch(err => {
               console.log(err);
          })
     }, []);
     return (
          <div>
               <Navbar />
               <ShopList shops={ shops } />
          </div>
     );
}

export default Home;
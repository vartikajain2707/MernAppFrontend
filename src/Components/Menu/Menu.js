import React, { useEffect, useState } from 'react';
import './Menu.css';

import axios from 'axios';
import ItemList from '../Item/ItemList';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Menu = () => {

     const { id } = useParams();
     const [item, setItem] = useState([]);
     const [shopName, setShopName] = useState('');
     const [shopPhotoURL, setShopPhotoURL] = useState('');

     useEffect(() => {
          axios.get("https://mern-app-front.herokuapp.com/" + id + "/items")
               .then(res => {
                    setItem(res.data.shopItems);
               })
               .catch(err => {
                    console.log(err);
               });
          axios.post("https://mern-app-front.herokuapp.com/getShopName", { id } )
               .then(res => {
                    setShopName(res.data.name);
                    setShopPhotoURL(res.data.photoURL);
               })
               .catch(err => {
                    console.log(err);
               });
     }, [id]);
     return (
          <div className="Menu">
               <Navbar />
               <h1 className="menuShopName">
                    { shopName }
               </h1>
               <img src={shopPhotoURL} alt="" className="shopLogo"/>
               <ItemList data={item} />
          </div>
     );
}

export default Menu;
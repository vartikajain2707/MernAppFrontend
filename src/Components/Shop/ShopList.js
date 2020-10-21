import React from 'react';
import ShopCard from './ShopCard';
import './ShopList.js';

const ShopList = (props) => {
     return (
          <div className="ShopList">
               {
                    props.shops.map(shop => {
                         return (
                              <ShopCard
                                   key = { shop._id }
                                   name = { shop.name }
                                   photoURL = { shop.photoURL }
                                   shopType = { shop.shopType }
                                   description = { shop.description }
                                   id = { shop._id }
                              />
                         );
                    })
               }
          </div>
     );
}

export default ShopList;
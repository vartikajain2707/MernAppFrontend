import React from 'react';
import './ItemList.css';

import ItemCard from './ItemCard';

const ItemList = (props) => {
     return (
          <div className="ItemList">
               {
                    props.data.map(item => {
                         return (
                              <ItemCard 
                                   key = { item._id }
                                   id = { item._id }
                                   name = { item.name }
                                   photoURL = { item.photoURL }
                                   price = { item.price }
                                   description = { item.description }
                                   availability = { item.availability }
                                   atShop = { item.atShop }
                              />
                         );
                    })
               }
          </div>
     );
}

export default ItemList;
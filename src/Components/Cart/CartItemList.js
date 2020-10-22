import React from 'react';
import './CartItemList.css';

import CartItemCard from './CartItemCard';

const CartItemList = (props) => {
     return (
          <div className="CartItemList">
               {
                    props.data.map(Cart => {
                         return (
                              <CartItemCard
                                   key = { Cart._id }      
                                   id = { Cart._id }
                                   name = { Cart.name }
                                   photoURL = { Cart.photoURL }
                                   price = { Cart.price }
                                   quantity = { Cart.quantity }
                              />
                         );
                    })
               }
          </div>
     );
}

export default CartItemList;
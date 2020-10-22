import React from 'react';
import './Cart.css';

import { useStateValue } from '../../Context/StateProvider';
import CartItemList from './CartItemList';
import Navbar from '../Navbar/Navbar';

const Cart = () => {
     const [{ cart }] = useStateValue();
     let sum = 0;
     for (let i = 0; i < cart.length; i++) {
          sum += cart[i].price * cart[i].quantity; 
     }
     return (
          <div className="Cart">
               <h2 className="CartHeading">
                    Checkout
               </h2>
               {
                    cart.length > 0 ? (
                         <CartItemList data = { cart } />
                    ) : (
                         <h2 className="emptyCart">
                              Your cart is empty. Please Add items to your cart.
                         </h2>
                    )
               }
               {
                    sum > 0 ? (
                         <button className="pay">
                              PAY
                         </button>
                    ) : (
                         <></>
                    )
               }
               <Navbar />
          </div>
     );
}

export default Cart;
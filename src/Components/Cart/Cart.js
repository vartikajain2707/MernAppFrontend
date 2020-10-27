import React from 'react';
import './Cart.css';

import { useStateValue } from '../../Context/StateProvider';
import CartItemList from './CartItemList';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const Cart = () => {
     const [{ cart }] = useStateValue();
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
                    cart.length > 0 ? (
                         <Link to="/payment">
                              <button className="pay">
                                   PAY
                              </button>
                         </Link>
                    ) : (
                         <></>
                    )
               }
               <Navbar />
          </div>
     );
}

export default Cart;
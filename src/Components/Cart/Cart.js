import React from 'react';
import './Cart.css';

import { useStateValue } from '../../Context/StateProvider';
import CartItemList from './CartItemList';
import Navbar from '../Navbar/Navbar';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Cart = () => {
     const [{ cart }] = useStateValue();
     let sum = 0;
     for (let i = 0; i < cart.length; i++) {
          sum += cart[i].price * cart[i].quantity; 
     }
     const checkout = (token) => {
          const body = {
               token,
               products: cart,
          }
          const headers = {
               "Content-Type": "application/json"
          }
          const jsonBody = JSON.stringify(body);
          return axios.post('http://localhost:5000/checkout', {headers, body: jsonBody})
                         .then(response => {
                              console.log(response);
                         })
                         .catch(err => {
                              console.log(err);
                         });
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
                         <StripeCheckout
                              image="https://b.zmtcdn.com/data/dish_photos/401/1991082d984f09377048f8da89443401.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                              stripeKey="pk_test_51H0PBdDthXXzKqsl3psOYIoc42uPTYMmUpNhN6sKvyav0HiA9RmQ8RnHFColXyuhCIKBkRFp50yUtlwtUUrkBXsd00iSzRjbzF"
                              name="Place Order"
                              token={checkout}
                              amount={ sum * 100 }
                         >
                              <button className="pay">
                                   PAY
                              </button>
                         </StripeCheckout>
                    ) : (
                         <></>
                    )
               }
               <Navbar />
          </div>
     );
}

export default Cart;
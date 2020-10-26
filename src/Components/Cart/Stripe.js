import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import './Stripe.css';

const promise = loadStripe("pk_test_51H0PBdDthXXzKqsl3psOYIoc42uPTYMmUpNhN6sKvyav0HiA9RmQ8RnHFColXyuhCIKBkRFp50yUtlwtUUrkBXsd00iSzRjbzF");

const Stripe = () => {
     return (
          <div>
               <Elements stripe={promise}>
                    <CheckoutForm />
               </Elements>
          </div>
     );
}

export default Stripe;
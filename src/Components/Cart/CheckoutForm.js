import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../../Context/StateProvider";
import { useAuth } from "../../Context/AuthContext";
import axios from 'axios';

export default function CheckoutForm() {
  const { currentUser } = useAuth();
  let [{ cart, order }] = useStateValue();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    let items = [];
    for (let i = 0; i < cart.length; i++) {
      items.push({
        id: cart[i].id,
        object: cart[i].name,
        amount: cart[i].price,
        quantity: cart[i].quantity,
        description: cart[i].description,
      });
    }
    let data = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: items, name: currentUser.displayName })
    }
    
    axios.post("https://mern-app-front.herokuapp.com/create-payment-intent", data)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setClientSecret(data.clientSecret);
      }).catch(err => {
        console.log(err);
      });
 /*    window
      .fetch("https://mern-app-front.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: items, name: currentUser.displayName }),
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setClientSecret(data.clientSecret);
      }).catch(err => {
        console.log(err);
      }); */
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "Black",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "17px",
        "::placeholder": {
          color: "Black",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: currentUser.email,
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      let l = cart.length;
      for(let i = 0; i < l; i++) {
        await order.push(cart.pop());
      }
      console.log(order);
      console.log(cart);
    }
  };

  return (
    <div className="PaymentFormContainer">
      <form id="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="StripeEmail"
        />
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="StripePay"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error alert" role="alert">
            {error}
          </div>
        )}
        {succeeded ? (
          <div className="success">
            <p
              className={succeeded ? "result-message" : "result-message hidden"}
            >
              Payment succeeded ✔
            </p>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}
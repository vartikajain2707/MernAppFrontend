import React from 'react';
import './CartItemCard.css';

const CartItemCard = (props) => {
     return (
          <div className="CartItemCard">
               <img src={ props.photoURL } alt="" className="CartItemImage"/>
               <h1 className="CartItemName">{ props.name }</h1>
               <p className="CartItemPrice">Rs. { props.price } /-</p>
               <div className="CartItemQuantityNumber">
                    <p style={{ margin: 0 }}>
                         { props.quantity }
                    </p>
               </div>
          </div>
     );
}

export default CartItemCard;
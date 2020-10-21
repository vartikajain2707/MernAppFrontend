import React from 'react';
import './ShopCard.css';
import { Link } from 'react-router-dom';

const ShopCard = (props) => {
     return (
          <div className="ShopCard">
               <img src={ props.photoURL } alt="logo" className="logo"/>
               <p className="shopname">
                    { props.name }
               </p>
               <p className="shopType">
                    { props.shopType }
               </p>
               <Link to={ '/shop/' + props.id } >
                    <button className="order">
                         ORDER
                    </button>
               </Link>
          </div>
     );
}

export default ShopCard;
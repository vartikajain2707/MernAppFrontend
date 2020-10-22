import React, { useState } from 'react';
import './ItemCard.css';
import { useStateValue } from '../../Context/StateProvider';

const ItemCard = (props) => {
     const [, dispatch] = useStateValue();
     const [quantity, setQuantity] = useState(0);

     const add = () => {
          setQuantity(quantity + 1);
          dispatch({
               type: 'ADD',
               payload: {
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    description: props.description,
                    photoURL: props.photoURL,
                    availability: props.availability,
                    atShop: props.atShop
               }
          });
     }

     const plus = async (e) => {
          await setQuantity(quantity + 1);
          await dispatch({
               type: 'PLUS',
               payload: {
                    id: props.id
               }
          });
     }

     const minus = async () => {
          await setQuantity(quantity - 1);
          await dispatch({
               type: 'MINUS',
               payload: {
                    id: props.id
               }
          });
     }
     return (
          <div className="ItemCard">
               <img 
                    src={ props.photoURL } 
                    alt="Item" 
                    className="itemImage"
               />
               <h1 className="itemName">
                    { props.name }
               </h1>
               <p className="description">
                    { props.description }
               </p>
               <p className="itemPrice">
                    Rs. { props.price } /-
               </p>
               {
                    quantity === 0 ? (
                         <button 
                              className="add"
                              onClick = { add }
                         >
                              ORDER
                         </button>
                    ) : (
                         <>
                              <button 
                                   className="minus"
                                   onClick = { minus }
                              >
                                   -
                              </button>

                              <input 
                                   type="text" 
                                   className="quant"
                                   value = { quantity }
                              />

                              <button 
                                   className="plus"
                                   onClick = { plus }
                              >
                                   +
                              </button>
                         </>
                    )
               }
          </div>
     );
}

export default ItemCard;
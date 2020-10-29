import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useStateValue } from '../../Context/StateProvider';

const Navbar = () => {

     const [{ cart }] = useStateValue();
     
     return (
          <div className="Navbar">
               <ul className="nav">
                    <li className="nav-item">
                         <Link to="/home" className="nav-link">
                              <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" class="icons bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                   <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                              </svg>
                         </Link>
                    </li>
                    <li className="nav-item">
                         <Link to="/search" className="nav-link">
                              <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="icons bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                   <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                              </svg>
                         </Link>
                    </li>
                    <li className="nav-item">
                         <Link to="/cart" className="nav-link">
                              {
                                   cart.length !== 0 ? (
                                        <div className="cartWithQuant">
                                             { cart?.length }
                                        </div>
                                   ) : (
                                        <span>
                                             
                                        </span>
                                   )
                              }
                              <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" className="icons bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                              </svg>
                         </Link>
                    </li>
                    <li className="nav-item">
                         <Link to="/profile" className="nav-link">
                              <svg width="1.75em" height="1.75em" viewBox="0 0 16 16" class="icons bi bi-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              </svg>
                         </Link>
                    </li>
               </ul>
          </div>
     );
}

export default Navbar;
import React, { useState } from 'react';
import './SearchBar.css';
import axios from 'axios';
import ShopList from '../Shop/ShopList';

const SearchBar = () => {
     const [term, setTerm] = useState('');
     const [shops, setShops] = useState([]);
     const querySearch = (e) => {
          setTerm(e.target.value);
          axios.post("http://localhost:5000/search", { query: e.target.value })
               .then(res => {
                    setShops(res.data);
               })
               .catch(err => {
                    console.log(err);
               });
     }
     return (
          <>
               <div className="SearchBar">
                    <input 
                         type="text" 
                         className="Bar"
                         value={term}
                         placeholder="Search"
                         onChange={querySearch}
                    />
                    <button className="Button" onChange={ querySearch }>
                         <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" id="searchIcon" className="icons bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                         </svg>
                    </button>
               </div>
               <ShopList shops={ shops } />
          </>
     );
}

export default SearchBar;
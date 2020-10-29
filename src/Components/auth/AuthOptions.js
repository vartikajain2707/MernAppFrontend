import React,{useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import './AuthOptions.css';

function AuthOptions() {
    const{userData,setUserData}=useContext(UserContext);
    const history=useHistory();


    const login=()=>history.push('/login');
    // const register=() =>history.push('/register')
    // const logout=()=>{
    //     history.push('/')
    //     setUserData({
    //         token:undefined,
    //         user:undefined
    //     });
    // localStorage.setItem("auth-token","");
    // };

        


    return (
        <nav>
            
                
            
            <div className='authOptions__login'>
                {/* <button onClick={register}>Register</button> */}

                <button onClick={login} className='authOptions__loginButton'>Login</button>
                <Link  to='/register'>
                    <p className='authOptions__link'>Don't Have An Account</p>
                </Link>
            </div>
           
          
        </nav>
    );
}

export default AuthOptions;

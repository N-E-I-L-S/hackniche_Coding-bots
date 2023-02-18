import React, { useRef, useState } from 'react'
import UserAuth from '../../context/AuthContext';
import { NavLink, Navigate } from 'react-router-dom'
// import Image from '../components/login_page_img.png'
import './Login.css'
import loginimg from '../../images/login.png'

export default function LoginPage() {
    const { user, login } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            <Navigate to='/home' />
            console.log(email);
            setLogged(false);
            setLogged1(true);
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    if(user==null)
    return (
        <>
       
            <div className="login-page relative">
                
               <div className="login-page-div">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(uname.current.value, pwd.current.value)
                }}
                >
                    <div className="login-div text-lg text-center  ">
                       <h2 className='my-5 text-3xl'>
                        Login Page
                        </h2>
                        
                        {logged ?
                            <p className='pmatch text-red-500'>Wrong Credentials</p>
                            :
                            null
                        }
                        {logged1 ?
                            <p className='pmatch-1 text-green-500'>Logged In!</p>
                            :
                            null
                        }
         
                        <div className="username">
                            {/* <label htmlFor="">Username</label> <br /> */}
                            <input className=" my-5" placeholder='Username' type="email" id="uname" ref={uname} required={true} />
                        </div>
                        <div className="password">
                            {/* <label htmlFor="">Password</label> <br /> */}
                            <input className=" my-5" placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
                        </div>
                        
                        <div className="btns">
                            <button type='submit' className='rounded-lg px-5 my-5 bg-green-cus-1 text-green-cus-2'>Login</button>
                        </div>
                        <div className=''>
                                    <NavLink className="border-2 border-green-cus-2 p-1 rounded-lg hover:bg-green-cus-2 hover:text-white my-10" to='/signup'>Don't have an account?  </NavLink> <br/>
                                   
                        </div>
                        
                    </div>
                </form>
                <img src={loginimg} alt="" className="absolute right-60 rounded-lg 0 w-1/3" />
            </div>
            </div>
           
        </>
    )
    else 
    return <Navigate to ='/home'/>
}

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
    
            <>

                <div className="login-page relative">

                    <div className="login-page-div">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            // handleLogin(uname.current.value, pwd.current.value)
                        }}
                        >
                            <div className="login-div text-lg text-center border-2 border-green-cus-1 p-5 bg-green-cus-1 rounded-lg shadow-2xl shadow-green-cus-2 ">
                                <h2 className=' text-3xl'>
                                    Login Page
                                </h2>

                                

                                <div className="username">
                                    {/* <label htmlFor="">Username</label> <br /> */}
                                    <input className=" my-4" placeholder='Username' type="email" id="uname" ref={uname} required={true} />
                                </div>
                                <div className="password">
                                    {/* <label htmlFor="">Password</label> <br /> */}
                                    <input className=" my-4" placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
                                </div>

                                <div className="btns">
                                    <NavLink to={"/home"}  className='rounded-lg px-5 my-4 bg-green-cus-1 text-green-cus-2' >Login</NavLink>
                                </div>
                                <div className=''>
                                    <NavLink className="border-2 border-green-cus-2 p-1 rounded-lg hover:bg-green-cus-2 hover:text-white my-10" to='/signup'>Don't have an account?  </NavLink> <br />

                                </div>

                            </div>
                        </form>
                        <img src={loginimg} alt="" className="absolute right-60 rounded-lg 0 w-1/3" />
                    </div>
                </div>

            </>
        
    
}

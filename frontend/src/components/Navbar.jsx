import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/AuthContext'


function classNameNames(...classNamees) {
    return classNamees.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { logout } = UserAuth();
    return (
        <nav className="flex items-center justify-between flex-wrap -z-10 bg-green-cus-1 px-5 py-2 mx-3 rounded-lg backdrop-blur-sm -mt-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                <span className="font-semibold text-3xl tracking-tight text-black">VeerMitra</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-5">
                <div className="text-sm lg:flex-grow">
                    <NavLink to="/" className="block mt-1 lg:inline-block lg:mt-0 text-green-cus-2 hover:text-black hover:bg-green-cus-2 hover:rounded-md mr-4 text-lg p-2">
                        Home
                    </NavLink>
                    <NavLink to="/jobs" className="block mt-1 lg:inline-block lg:mt-0 text-green-cus-2 hover:text-black hover:bg-green-cus-2 hover:rounded-md mr-4 text-lg p-2">
                        Jobs
                    </NavLink>
                    <NavLink to="/blogs" className="block mt-1 lg:inline-block lg:mt-0 text-green-cus-2 hover:text-black hover:bg-green-cus-2 hover:rounded-md mr-4  text-lg p-2">
                        Blog
                    </NavLink>
                    <NavLink to="/pension" className="block mt-1 lg:inline-block lg:mt-0 text-green-cus-2 hover:text-black hover:bg-green-cus-2 hover:rounded-md mr-4  text-lg p-2">
                        Pension
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

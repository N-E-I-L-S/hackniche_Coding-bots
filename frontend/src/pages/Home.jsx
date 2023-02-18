import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar';
import UserAuth from '../context/AuthContext'

export default function Home() {
  const { logout } = UserAuth();
  return (
    <>
      <Navbar />
      <div className='p-10'>
        <h1 className='main-text uppercase text-green-cus-2'>
          WarCrop is aimed at providing support for national military forces bla bhla kdfal.
        </h1>
        <p className='text-green-cus-1 text-lg '> the natios sdkfa;da fdkfasdlkf</p>

      </div>
      <div className=" mt-20">
        <div className='inner-container'><img src="" alt="" /><img src="" alt="" /></div>
        <div className='relative'>
          <div className='m-10 absolute w-1/2 right-2' >
            <h2 className='font-bold text-3xl text-green-cus-2 mb-3'>jobs and skill development</h2>
            <p cla>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, libero rerum voluptas molestiae provident unde in vel consequuntur sunt veritatis recusandae. Corrupti consectetur dicta mollitia et deserunt deleniti accusamus adipisci!</p>
          </div>
        </div>
      </div>

    </>
  )
}

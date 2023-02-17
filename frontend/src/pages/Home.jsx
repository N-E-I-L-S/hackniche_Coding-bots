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
          WarCrop is aimed at providing support for national military forces.
        </h1>
        <p className='text-green-cus-1 text-lg '> the natios sdkfa;da fdkfasdlkf</p>

      </div>
      <div className=" mt-15 relative">
        <img className='absolute rounded-lg z-10 w-72 right-6 mt-10' src="https://media.istockphoto.com/id/1215339129/photo/indian-military-man-stock-images.jpg?s=612x612&w=0&k=20&c=Mz4A2scEh09TE0005cfIivHpWkrYfHum4zmJ92j34e8=" alt="" />
        <img className='absolute rounded-lg  w-72 right-60 bottom-14 mt-10' src="https://t3.ftcdn.net/jpg/04/91/37/46/240_F_491374697_G3TdemQd93VSJBDff2CuPn9729yclvYi.jpg" alt="" />
        <div className=''>
          <div className='m-10  w-1/2 right-2' >
            <h2 className='font-bold text-3xl text-green-cus-2 mb-3'>jobs and skill development</h2>
            <p cla>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, libero rerum voluptas molestiae provident unde in vel consequuntur sunt veritatis recusandae. Corrupti consectetur dicta mollitia et deserunt deleniti accusamus adipisci!</p>
          </div>
        </div>
        <div className=''>
          <div className='m-10  w-1/2 right-2' >
            <h2 className='font-bold text-3xl text-green-cus-2 mb-3'>jobs and skill development</h2>
            <p cla>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, libero rerum voluptas molestiae provident unde in vel consequuntur sunt veritatis recusandae. Corrupti consectetur dicta mollitia et deserunt deleniti accusamus adipisci!</p>
          </div>
        </div>
        <div className=''>
          <div className='m-10  w-1/2 right-2' >
            <h2 className='font-bold text-3xl text-green-cus-2 mb-3'>jobs and skill development</h2>
            <p cla>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, libero rerum voluptas molestiae provident unde in vel consequuntur sunt veritatis recusandae. Corrupti consectetur dicta mollitia et deserunt deleniti accusamus adipisci!</p>
          </div>
        </div>
      </div>

      <div className="main-container bg-green-cus-1 h-52">
        hi

      </div>

    </>
  )
}

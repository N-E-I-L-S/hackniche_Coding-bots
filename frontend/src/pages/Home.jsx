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
          Empowering our Military Community - Together.
        </h1>

      </div>
      <div className=" mt-15 relative">
        <img className='absolute rounded-lg z-10 w-72 right-6 mt-10' src="https://media.istockphoto.com/id/1215339129/photo/indian-military-man-stock-images.jpg?s=612x612&w=0&k=20&c=Mz4A2scEh09TE0005cfIivHpWkrYfHum4zmJ92j34e8=" alt="" />
        <img className='absolute rounded-lg  w-72 right-60 bottom-14 mt-10' src="https://t3.ftcdn.net/jpg/04/91/37/46/240_F_491374697_G3TdemQd93VSJBDff2CuPn9729yclvYi.jpg" alt="" />
        <div className=''>
          <div className='m-10  w-1/2 right-2' >
            <p cla>Welcome to our platform, dedicated to supporting our nation's military and their families. Our goal is to make their lives easier by providing a range of resources and services, including financial assistance, counseling, job placement, education, and community support. Together, we can empower our military community and show our gratitude for   their service.!</p>
          </div>
          <div className='m-10  w-1/2 right-2' >
            <p cla>The welfare of our military men and women is a duty we owe them as a grateful nation. The care and support of our military personnel is crucial for their continued service and the strength of our society.</p>
          </div>
          <div className='m-10  w-1/2 right-2' >
            <p cla>Ensuring the welfare of our military personnel is not just policy, it's a reflection of our values as a nation.Taking care of our military personnel is the right thing to do, and essential for building a strong and resilient society.</p>
          </div>
        </div>
      </div>

      <div className="main-container bg-green-cus-1 h-52 mt-32">


      </div>

    </>
  )
}

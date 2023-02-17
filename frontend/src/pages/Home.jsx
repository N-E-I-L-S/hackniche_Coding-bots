import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/AuthContext'

export default function Home() {
    const {logout} = UserAuth();
  return (
    <>
    <div>Home</div>
    
    </>
  )
}

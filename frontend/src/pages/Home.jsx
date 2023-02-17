import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAuth from '../context/AuthContext'

export default function Home() {
  const { logout } = UserAuth();
  return (
    <>
      <div className=''>
        <h1 className='main-text uppercase'>
          WarCrop is aimed at providing support for national military forces bla bhla kdfal.
        </h1>
      </div>

    </>
  )
}

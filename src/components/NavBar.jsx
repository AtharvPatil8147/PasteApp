import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='font-bold h-[45px] w-full flex flex-row gap-3 p-2 place-content-evenly bg-[#1B1A55] rounded-md'>
        <NavLink
        to='/' className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }>
            Home
        </NavLink>

        <NavLink
        to='/pastes' className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }>
            Pastes
        </NavLink>
    </div>
  )
}

export default NavBar

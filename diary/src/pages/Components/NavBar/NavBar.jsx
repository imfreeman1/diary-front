import React from 'react'
import NavItem from './NavItem';

const navItemList = ["Cover", "2023", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "Weekly", "Daily", "Personal"];

const NavBar = () => {
  return (
    <ul className='flex justify-center gap-3'>
      {navItemList.map((val,idx) => {
        return <NavItem title = {val}/>
      })}
    </ul>
  )
}

export default NavBar
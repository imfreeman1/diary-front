import React from 'react'
import Button from '../Button'
import { useRouter } from 'next/router'

const hoverBgColorObj = {Month:"hover:bg-orange-200", Weekly:"hover:bg-[#9DBC9D]",};

const NavItem = ({title}) => {
  const router = useRouter().pathname.replace('/','');
  
  return (
    <li className={`font-bold p-2 w-min ${hoverBgColorObj[router]}`}>
      <Button content={title} />
    </li>
  )
}

export default NavItem
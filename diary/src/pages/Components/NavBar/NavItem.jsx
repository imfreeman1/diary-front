import React from 'react';
import { useRouter } from 'next/router';
import Button from '../Button';

const hoverBgColorObj = {Month:"hover:bg-gray-100", Weekly:"hover:bg-[#9DBC9D]",};

function NavItem({ title }) {
  const router = useRouter().pathname.replace('/', '');
  return (
    <li className={`font-bold p-2 w-min ${hoverBgColorObj[router]}`}>
      <Button content={title} onClick={()=>{}} />
    </li>
  );
}

export default NavItem;

import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';

const navItemList = ['Cover', '2023', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Weekly', 'Daily', 'Personal'];

function NavBar() {
  return (
    <div className=" fixed w-full">
      <ul className="flex justify-center gap-3">
        {navItemList.map((val) => <NavItem title={val} key={uuidv4()} />)}
      </ul>
    </div>

  );
}

export default NavBar;

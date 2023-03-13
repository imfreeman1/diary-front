import React from 'react';
// v4 , uuidv4를 쓸건지 정해
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';

//상수로 빼도 좋을거같은데?
const navItemList = ['Cover', '2023', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Weekly', 'Daily', 'Personal'];

function NavBar() {
  return (
    <div className=" fixed w-full">
      <ul className="flex justify-center gap-3">
        {/* val 대신 의미있는 변수 활용하자 */}
        {navItemList.map((val) => <NavItem title={val} key={uuidv4()} />)}
      </ul>
    </div>

  );
}

export default NavBar;

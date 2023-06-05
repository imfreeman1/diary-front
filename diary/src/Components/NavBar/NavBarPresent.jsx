import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { NAVBAR_HOVER_BG_COLOR_OBJECT, NAVBAR_SELECTED_BG_COLOR_OBJECT } from 'src/Constants/navbarConstants';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import NavItem from './NavItem';
import LogoutButton from '../LogoutButton/LogoutButtonContainer';

function NavBarPresent({ navItemList }) {
  return (
    <div className=" relative w-full flex justify-center">
      <ul className="flex justify-center ">
        {navItemList.map((navItem) => (
          <NavItem
            title={navItem}
            key={v4()}
            NAVBAR_SELECTED_BG_COLOR_OBJECT={NAVBAR_SELECTED_BG_COLOR_OBJECT}
            NAVBAR_HOVER_BG_COLOR_OBJECT={NAVBAR_HOVER_BG_COLOR_OBJECT}
            CURRENT_ROUTER_PATH={CURRENT_ROUTER_PATH()}
          />
        ))}
      </ul>
      <LogoutButton/>
    </div>
  );
}

NavBarPresent.propTypes = {
  navItemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBarPresent;

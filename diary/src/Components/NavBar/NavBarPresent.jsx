import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { NAVBAR_HOVER_BG_COLOR_OBJECT, NAVBAR_SELECTED_BG_COLOR_OBJECT } from 'src/constants/navbarConstants';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import NavItem from './NavItem';

function NavBarPresent({ routerSelector, navItemList }) {
  return (
    <div className=" relative w-full">
      <ul className="flex justify-center">
        {navItemList.map((navItem) => (
          <NavItem
            title={navItem}
            key={v4()}
            routerSelector={routerSelector}
            NAVBAR_SELECTED_BG_COLOR_OBJECT={NAVBAR_SELECTED_BG_COLOR_OBJECT}
            NAVBAR_HOVER_BG_COLOR_OBJECT={NAVBAR_HOVER_BG_COLOR_OBJECT}
            CURRENT_ROUTER_PATH={CURRENT_ROUTER_PATH()}
          />
        ))}
      </ul>
    </div>
  );
}

NavBarPresent.propTypes = {
  routerSelector: PropTypes.func.isRequired,
  navItemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBarPresent;

import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {
  NAV_ITEM_LIST,
  NAVBAR_HOVER_BG_COLOR_OBJECT,
} from 'src/Constants/navbarConstants';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import NavItem from './NavItem';

function NavBarPresent({ routerSelector }) {
  return (
    <div className=" relative w-full">
      <ul className="flex justify-center gap-3">
        {NAV_ITEM_LIST.map((navItem) => (
          <NavItem
            title={navItem}
            key={v4()}
            routerSelector={routerSelector}
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
};

export default NavBarPresent;

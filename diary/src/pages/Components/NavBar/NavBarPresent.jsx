import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { NAV_ITEM_LIST } from './src/constants/navbarConstants';
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

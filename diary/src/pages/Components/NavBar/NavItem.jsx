import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { NAVBAR_HOVER_BG_COLOR_OBJECT } from './src/Constants/navbarConstants';
import { CURRENT_ROUTER_PATH } from './src/Constants/constants';

function NavItem({ title, routerSelector }) {
  return (
    <li
      className={`font-bold p-2 w-min ${
        NAVBAR_HOVER_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH()]
      }`}
    >
      <Button
        content={title}
        onClick={(e) => routerSelector(e)}
      />
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  routerSelector: PropTypes.func.isRequired,
};

export default NavItem;

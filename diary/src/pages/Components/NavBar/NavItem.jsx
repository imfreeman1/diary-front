import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function NavItem({
  title, routerSelector, NAVBAR_HOVER_BG_COLOR_OBJECT, CURRENT_ROUTER_PATH,
}) {
  return (
    <li
      className={`font-bold p-3 w-min ${
        NAVBAR_HOVER_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH]
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
  NAVBAR_HOVER_BG_COLOR_OBJECT: PropTypes.objectOf(PropTypes.string).isRequired,
  CURRENT_ROUTER_PATH: PropTypes.string.isRequired,

};

export default NavItem;

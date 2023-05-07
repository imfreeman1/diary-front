import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import selectedItemChecker from 'src/Utils/selectedItemChecker';
import Button from '../Button';

function NavItem({
  title,
  routerSelector,
  NAVBAR_HOVER_BG_COLOR_OBJECT,
  CURRENT_ROUTER_PATH,
  NAVBAR_SELECTED_BG_COLOR_OBJECT,
}) {
  const { selectedMonth } = useSelector(
    (state) => state.monthSelectorReducer,
  );
  const selectedItem = useRef(null);

  selectedItem.current = selectedItemChecker(CURRENT_ROUTER_PATH, selectedMonth, title);
  return (
    <li
      className={`font-bold p-3 px-5 w-min ${selectedItem.current ? NAVBAR_SELECTED_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH] : null} ${NAVBAR_HOVER_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH]}`}
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
  NAVBAR_SELECTED_BG_COLOR_OBJECT: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavItem;

import React from 'react';
import PropTypes from 'prop-types';
import MakeNavItemList from 'src/Utils/makeNavItem';
import NavBarPresent from './NavBarPresent';

const NavBarContainer = ({ yearInMonth }) => {
  const navItemList = MakeNavItemList(yearInMonth);
  return <NavBarPresent navItemList={navItemList} />;
};

NavBarContainer.propTypes = {
  yearInMonth: PropTypes.number.isRequired,
};

export default NavBarContainer;

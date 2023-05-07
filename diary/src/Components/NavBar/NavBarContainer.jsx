import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setMonthRouter } from 'src/Redux/action';
import MakeNavItemList from 'src/Utils/makeNavItem';
import NavBarPresent from './NavBarPresent';

const NavBarContainer = ({ yearInMonth }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth(currYear);
  const navItemList = MakeNavItemList(yearInMonth);
  const routerSelector = (e) => {
    const routerKey = e.target.innerText;
    switch (routerKey) {
      case 'Cover':
        return router.push('/Main');
      case 'Weekly':
        return router.push(routerKey);
      case 'Daily':
        return router.push(routerKey);
      case 'Personal':
        return router.push('/Profile');
      case yearInMonth ? `${yearInMonth}` : `${currYear}`:
        dispatch(setMonthRouter({ willMoveMonth: currMonth, currYear }));
        return router.push('/Monthly');
      default:
        dispatch(setMonthRouter({ willMoveMonth: +routerKey - 1, currYear }));
        return router.push('/Monthly');
    }
  };
  return <NavBarPresent routerSelector={routerSelector} navItemList={navItemList} />;
};

NavBarContainer.propTypes = {
  yearInMonth: PropTypes.number.isRequired,
};

export default NavBarContainer;

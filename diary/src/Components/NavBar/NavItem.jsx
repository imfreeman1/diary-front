import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import selectedItemChecker from 'src/Utils/selectedItemChecker';
import { useRouter } from 'next/router';
import { setMonthRouter } from 'src/Redux/action';
import { CURRENT_ROUTER_PATH } from 'src/Constants/constants';
import { NAVBAR_HOVER_BG_COLOR_OBJECT, NAVBAR_SELECTED_BG_COLOR_OBJECT } from 'src/Constants/navbarConstants';
import Button from '../Button/Button';

function NavItem({
  title,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currRouter = CURRENT_ROUTER_PATH();
  const selectedItem = useRef(null);
  const { selectedMonth } = useSelector((state) => state.monthSelectorReducer);
  selectedItem.current = selectedItemChecker(
    selectedMonth,
    title,
  );
  const navRouter = useCallback((arg) => {
    if (!Number.isNaN(Number(title))) {
      if (arg === '2023') {
        const currMonth = new Date().getMonth() + 1;
        dispatch(
          setMonthRouter({ willMoveMonth: currMonth - 1, currYear: 2023 }),
        );
        return `Monthly?d=2023-${currMonth}`;
      }
      dispatch(
        setMonthRouter({ willMoveMonth: Number(title) - 1, currYear: 2023 }),
      );
      return `Monthly?d=2023-${arg}`;
    }
    return `/${arg}`;
  }, [dispatch]);

  return (
    <li className="font-bold w-min">
      <Button
        className={`p-3 px-5 ${
          selectedItem.current
          && NAVBAR_SELECTED_BG_COLOR_OBJECT[currRouter]
        } ${NAVBAR_HOVER_BG_COLOR_OBJECT[currRouter]}`}
        content={title}
        onClick={() => {
          router.push(navRouter(title));
        }}
      />
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(NavItem);

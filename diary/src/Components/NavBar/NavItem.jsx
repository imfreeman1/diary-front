import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import selectedItemChecker from 'src/Utils/selectedItemChecker';
import { useRouter } from 'next/router';
import { setMonthRouter } from 'src/Redux/action';
import Button from '../Button/Button';

function NavItem({
  title,
  NAVBAR_HOVER_BG_COLOR_OBJECT,
  CURRENT_ROUTER_PATH,
  NAVBAR_SELECTED_BG_COLOR_OBJECT,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const selectedItem = useRef(null);
  const { selectedMonth } = useSelector(
    (state) => state.monthSelectorReducer,
  );
  selectedItem.current = selectedItemChecker(CURRENT_ROUTER_PATH, selectedMonth, title);
  const navRouter = (arg) => {
    if (!Number.isNaN(Number(title))) {
      if (arg === '2023') {
        const currMonth = new Date().getMonth() + 1;
        dispatch(setMonthRouter({ willMoveMonth: currMonth - 1, currYear: 2023 }));
        return `Monthly?d=2023-${currMonth}`;
      }
      dispatch(setMonthRouter({ willMoveMonth: Number(title) - 1, currYear: 2023 }));
      return `Monthly?d=2023-${arg}`;
    }
    return `/${arg}`;
  };

  return (
    <li
      className={`font-bold p-3 px-5 w-min ${selectedItem.current && NAVBAR_SELECTED_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH]} ${NAVBAR_HOVER_BG_COLOR_OBJECT[CURRENT_ROUTER_PATH]}`}
    >
      <Button
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
  NAVBAR_HOVER_BG_COLOR_OBJECT: PropTypes.objectOf(PropTypes.string).isRequired,
  CURRENT_ROUTER_PATH: PropTypes.string.isRequired,
  NAVBAR_SELECTED_BG_COLOR_OBJECT: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavItem;

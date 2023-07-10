import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import NavItem from './NavItem';
import LogoutButton from '../LogoutButton/LogoutButtonContainer';
import StickerSaveButton from '../StickerSaveButton/StickerSaveButton';

function NavBarPresent({ navItemList }) {
  return (
    <div className=" relative w-full flex justify-center gap-3">
      <ul className="flex justify-center basis-11/12">
        {navItemList.map((navItem) => (
          <NavItem
            title={navItem}
            key={v4()}
          />
        ))}
      </ul>
      <StickerSaveButton />
      <LogoutButton />
    </div>
  );
}

NavBarPresent.propTypes = {
  navItemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(NavBarPresent);

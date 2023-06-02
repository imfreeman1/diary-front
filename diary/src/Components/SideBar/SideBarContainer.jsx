import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SideBarPresent from './SideBarPresent';

function SideBarContainer({ pageDate }) {
  const stickerList = useSelector(
    ({ stickerReducer }) => stickerReducer.stickersObj.Table,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <SideBarPresent
      stickerList={stickerList}
      modalVisible={modalVisible}
      modalHandler={() => { setModalVisible((s) => !s); }}
      sidebarVisible={sidebarVisible}
      sidebarHandler={() => { setSidebarVisible((s) => !s); }}
      pageDate={pageDate}
    />
  );
}

SideBarContainer.propTypes = {
  pageDate: PropTypes.string.isRequired,
};

export default SideBarContainer;

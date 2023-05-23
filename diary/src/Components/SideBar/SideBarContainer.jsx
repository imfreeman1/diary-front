import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SideBarPresent from './SideBarPresent';

function SideBarContainer({ pageDate }) {
  const stickerList = useSelector(
    (state) => state.stickerReducer.stickersArray.Table,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // visibleHandler로 통합할까?
  const modalHandler = () => {
    setModalVisible(!modalVisible);
  };

  const sidebarHandler = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SideBarPresent
      stickerList={stickerList}
      modalVisible={modalVisible}
      modalHandler={modalHandler}
      sidebarVisible={sidebarVisible}
      sidebarHandler={sidebarHandler}
      pageDate={pageDate}
    />
  );
}

SideBarContainer.propTypes = {
  pageDate: PropTypes.string.isRequired,
};

export default SideBarContainer;

import React, { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutSide";
import PropTypes from "prop-types";

const useControlModal = (dayInfo) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef();

  const handleModalOpen = () => {
    if (dayInfo.isInMonth) {
      setTimeout(() => {
        setModalVisible(true);
      }, 300);
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };
  useOnClickOutside(modalRef, () => setModalVisible(false));

  return {
    modalVisible,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};

useControlModal.propTypes = {
  dayInfo: PropTypes.object,
};
export default useControlModal;

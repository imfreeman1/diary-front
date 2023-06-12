import { useRef, useState } from 'react';
import useOnClickOutside from './useOnClickOutSide';

/**
 * @param {modalVisible} boolean
 * @param {modalRef} ref 모달 영역 밖 확인
 * @param {handleModalOpen} func 모달 창 열기
 * @param {handleModalClose} func 모달 창 닫기
 * @returns
 */

const useControlModal = (isInMonth) => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalRef = useRef(null);
  const handleModalClose = () => {
    setModalVisible(false);
  };

  useOnClickOutside(modalRef, () => setModalVisible(false));
  // Month 내의 날짜가 아니면 모달창이 나타나지 않게 설정
  const handleModalOpen = () => {
    if (isInMonth) {
      setTimeout(() => {
        setModalVisible(true);
      }, 300);
    }
  };

  return {
    modalVisible,
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};
export default useControlModal;

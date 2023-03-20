import React, { useRef, useState } from "react";
import useOnClickOutside from "@/pages/hooks/useOnClickOutSide";
import MonthDatePresenter from "./MonthDatePresenter";
import PropTypes from "prop-types";
/**
 * @param {dayInfo} obj {각 날짜 정보들, 요일, todo...}
 * @param {handleInputModalOpen()} 더블 클릭하면 입력창이 나옴
 * @param {handleInputModalClose(), handleImputModalClose} 엑스창을 클릭 또는 사이드를 클릭하면 창이 꺼짐
 * @returns
 */

const MonthDateContainer = ({ dayInfo }) => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const inputModalRef = useRef();

  const handleInputModalOpen = () => {
    if (dayInfo.isInMonth) {
      setTimeout(() => {
        setInputModalVisible(true);
      }, 300);
    }
  };

  const handleInputModalClose = () => {
    setInputModalVisible(false);
  };
  useOnClickOutside(inputModalRef, () => setInputModalVisible(false));

  const onChildDbclick = (e) => {
    e.stopPropagation();
  };

  return (
    <MonthDatePresenter
      dayInfo={dayInfo}
      inputModalVisible={inputModalVisible}
      inputModalRef={inputModalRef}
      handleInputModalOpen={handleInputModalOpen}
      handleInputModalClose={handleInputModalClose}
      onChildDbclick={onChildDbclick}
    />
  );
};
MonthDateContainer.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthDateContainer;

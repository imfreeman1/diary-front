import React from "react";
import MonthTodo from "./MonthTodo/MonthTodo";
import MonthInputModal from "@/pages/Components/Month/MonthModal/MonthInputModal";
import PropTypes from "prop-types";

const MonthDatePresenter = ({
  dayInfo,
  handleInputModalOpen,
  onChildDbclick,
  inputModalRef,
  inputModalVisible,
  handleInputModalClose,
}) => {
  return (
    <td
      onDoubleClick={() => handleInputModalOpen()}
      className="static w-36 h-40 border border-gray-600"
    >
      <div
        className={`${
          dayInfo.isInMonth
            ? dayInfo.isHoliday
              ? "text-[#FF0000]"
              : "text-black"
            : "text-gray-400"
        }`}
      >
        <span>{dayInfo.date} </span>
        <span className="text-sm">{dayInfo.dateName}</span>
      </div>
      <MonthTodo dayInfo={dayInfo} />
      <div onDoubleClick={onChildDbclick} ref={inputModalRef}>
        <MonthInputModal
          dayInfo={dayInfo}
          inputModalVisible={inputModalVisible}
          handleInputModalClose={handleInputModalClose}
        />
      </div>
    </td>
  );
};

MonthDatePresenter.propTypes = {
  dayInfo: PropTypes.object,
  handleInputModalOpen: PropTypes.func,
  onChildDbclick: PropTypes.func,
  inputModalRef: PropTypes.ref,
  inputModalVisible: PropTypes.boolean,
  handleInputModalClose: PropTypes.func,
};
export default MonthDatePresenter;

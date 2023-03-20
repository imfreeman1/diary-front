import React from "react";
import MonthTodo from "./MonthTodo/MonthTodo";
import MonthInputModal from "@/pages/Components/Month/MonthModal/MonthInputModal";
import PropTypes from "prop-types";
import useControlModal from "@/pages/hooks/useControlModal";

// MonthTodo : 입력한 투두 나타냄
// MonthInputModal : 더블 클릭 -> input창 열림

/**
 * @param {ctrInputModal} { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthDate = ({ dayInfo }) => {
  const ctrInputModal = useControlModal(dayInfo);
  return (
    <td
      onDoubleClick={() => ctrInputModal.handleModalOpen()}
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
      <MonthInputModal
        dayInfo={dayInfo}
        inputModalVisible={ctrInputModal.modalVisible}
        handleInputModalClose={ctrInputModal.handleModalClose}
        inputModalRef={ctrInputModal.modalRef}
      />
    </td>
  );
};

MonthDate.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthDate;

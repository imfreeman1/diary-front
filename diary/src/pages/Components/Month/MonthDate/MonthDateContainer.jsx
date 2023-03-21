import React from "react";
import useControlModal from "@/pages/hooks/useControlModal";
import MonthDatePresenter from "./MonthDatePresenter";
import PropTypes from "prop-types";

/**
 * @param {ctrInputModal} { modalVisible: boolean, modalRef:modalRef, handleModalOpen: {f}, handleModalClose: {f} }
 * @returns
 */

const MonthDateContainer = ({ dayInfo }) => {
  const ctrInputModal = useControlModal(dayInfo);

  return <MonthDatePresenter dayInfo={dayInfo} ctrInputModal={ctrInputModal} />;
};

MonthDateContainer.propTypes = {
  dayInfo: PropTypes.object,
};
export default MonthDateContainer;

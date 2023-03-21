import React from "react";
import Button from "../../Button";
import MonthTodoItemContainer from "../MonthTodoItem/MonthTodoItemContainer";
import MonthListModalContainer from "../MonthModal/MonthListModal/MonthListModalContainer";
import { v4 } from "uuid";
import { SHOW_MORE_TODO } from "@/Constants/monthConstants";
import PropTypes from "prop-types";

const MonthTodoPresenter = ({ dayInfo, ctrListModal, viewTodoLen }) => {
  const { todos } = dayInfo;
  return (
    <>
      {todos.map((todo, idx) => {
        if (idx < viewTodoLen) {
          return (
            <MonthTodoItemContainer key={v4()} todo={todo} dayInfo={dayInfo} />
          );
        }
        if (idx === viewTodoLen) {
          return (
            <>
              <Button
                key={v4()}
                onClick={() => ctrListModal.handleModalOpen()}
                content={SHOW_MORE_TODO(dayInfo.todos)}
                className="block font-semibold p-1 pl-2 my-2 mx-auto rounded hover:bg-gray-300 hover:cursor-pointer"
              />
              <MonthListModalContainer
                dayInfo={dayInfo}
                listModalVisible={ctrListModal.modalVisible}
                handleListModalClose={ctrListModal.handleModalClose}
                listModalRef={ctrListModal.modalRef}
              />
            </>
          );
        }
      })}
    </>
  );
};

MonthTodoPresenter.propTypes = {
  dayInfo: PropTypes.object,
  ctrListModal: PropTypes.object,
  viewTodoLen: PropTypes.number,
};

export default MonthTodoPresenter;

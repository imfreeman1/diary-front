import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  POST_WEEKLY_DELETE_OPT, POST_WEEKLY_UPDATE_OPT, POST_WEEKLY_WRITE_OPT, WEEKLY_CONST,
} from 'src/Constants/weeklyConstant';
import useAxios from 'src/hooks/useAxios';
import { setTextContent, setEditable, setWeeklyIsWriten } from '../../Redux/action';
import WeeklyDisplayPresenter from './WeeklyDisplayPresenter';
/**
 * @param {idx} number, 배열의 idx (0-7)
 * @param {currlocWeek} str, "2023-03-W3"
 * @param {weekly} obj, 해당 요일의 정보 {day:"", locdate:"", textContent:""}
 * @param {weekTextContent} str 해당 요일의 textContent
 *
 * @returns
 */

const WeeklyDisplayContainer = ({ idx }) => {
  const weeklyContents = useSelector(
    ({ weeklyReducer }) => weeklyReducer.weeklyContents,
  );
  const { currlocWeek } = weeklyContents;
  const weekly = weeklyContents[WEEKLY_CONST.NUM_OF_WEEK(currlocWeek)][idx];
  const { textContent, isEditable, isWriten } = weekly;
  const { operation, response } = useAxios();
  const dispatch = useDispatch();

  const onClickWeeklyContentRemove = async () => {
    operation(POST_WEEKLY_DELETE_OPT({
      string_of_week: currlocWeek, number_of_week: idx,
    }));
    dispatch(
      setWeeklyIsWriten({
        idx,
        content: '',
        isWriten: false,
        locThisWeek: currlocWeek,
      }),
    );
  };
  const textHandleChange = (htmlText) => {
    dispatch(
      setTextContent({
        content: htmlText,
        idx,
        locThisWeek: currlocWeek,
      }),
    );
  };

  const weeklyContentWrite = async () => {
    if (isEditable && !isWriten && textContent.trim() !== '') {
      operation(POST_WEEKLY_WRITE_OPT({
        string_of_week: currlocWeek, number_of_week: idx, textContent,
      }));
    }
  };

  const weeklyContentUpdate = async () => {
    if (isEditable && isWriten) {
      operation(POST_WEEKLY_UPDATE_OPT({
        string_of_week: currlocWeek, number_of_week: idx, textContent,
      }));
    }
  };

  const setIsEditable = () => {
    weeklyContentWrite();
    weeklyContentUpdate();
    dispatch(
      setEditable({
        idx,
        locThisWeek: currlocWeek,
      }),
    );
  };

  return (
    <WeeklyDisplayPresenter
      isEditable={isEditable}
      onClickWeeklyContentRemove={onClickWeeklyContentRemove}
      setIsEditable={setIsEditable}
      weekly={weekly}
      weekTextContent={textContent}
      textHandleChange={textHandleChange}
    />
  );
};

WeeklyDisplayContainer.propTypes = {
  idx: PropTypes.number.isRequired,
};

export default WeeklyDisplayContainer;

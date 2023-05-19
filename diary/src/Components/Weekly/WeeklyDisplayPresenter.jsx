/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import WeeklyTiptapContainer from '../WeeklyTipTap/WeeklyTipTapContainer';

const WeeklyDisplayPresenter = ({
  weekly,
  weekTextContent,
  handleChange,
  setIsEditable,
  isEditable,
  onClickWeeklyContentRemove,
}) => (
  <div className="w-64 h-[450px] bg-white rounded-xl border-2 border-black border-dashed">
    <div className="flex">
      <button
        type="button"
        className="my-3 ml-3 w-5 h-5 border-2 border-black rounded-full"
        onClick={setIsEditable}
      />
      <button
        type="button"
        className="ml-auto"
        onClick={onClickWeeklyContentRemove}
      >
        <BiTrash size={24} />
      </button>
    </div>

    {
      !isEditable && (
        <>
          <div className="text-xl font-bold">{weekly.day}</div>
          {weekly.day === 'Weekly' ? (
            <p className="h-6" />
          ) : (
            <p className="bottom-0 right-0 m-1 text-sm font-semibold text-green-700">
              {weekly.locdate}
            </p>
          )}
        </>
      )
    }
    <div className="overflow-hidden transition duration-100 ease-in-out ">
      <WeeklyTiptapContainer
        weekly={weekly}
        weekTextContent={weekTextContent}
        handleChange={handleChange}
        isEditable={isEditable}
      />
    </div>
  </div>
);

WeeklyDisplayPresenter.propTypes = {
  weekly: PropTypes.shape({
    day: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    locdate: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
  }).isRequired,
  weekTextContent: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  setIsEditable: PropTypes.func.isRequired,
  onClickWeeklyContentRemove: PropTypes.func.isRequired,
};
export default WeeklyDisplayPresenter;

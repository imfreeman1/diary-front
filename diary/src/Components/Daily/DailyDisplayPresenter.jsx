import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { DAILY_CONST } from '../../Constants/dailyConstant';
import TiptapContainer from '../Tiptap/TiptapContainer';
import DatepickerComponentContainer from '../DatepickerComponent/DatepickerComponentContainer';

function DailyDisplayPresenter({
  dailyInfo, titleText, handleInput, selectedDate, setSelectedDate,
}) {
  const roundLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  // useEffect(()=>{
  //   console.log(dailyInfo);
  //   console.log(titleText);
  //   console.log(selectedDate);
  // })
  return (
    <div className="mx-10 my-5 p-2 border-4 border-gray-100 shadow-sm">
      <div className="flex m-5">
        {roundLine.map(() => (
          <div
            key={v4()}
            className="w-20 h-20 border-t-2 border-gray-500 rounded-full"
          />
        ))}
      </div>
      <div className="flex text-center text-xl font-bold border">
        <div className="basis-1/2">
          <DatepickerComponentContainer
            isWeekly={false}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            inputStyle="text-center text-xl font-bold hover:text-blue-800"
          />
        </div>
        <div className="basis-1/2 text-white bg-slate-400">
          {dailyInfo && dailyInfo.day }
        </div>
      </div>
      <div className="m-5 my-20">
        <div className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">
          {DAILY_CONST.TITLE}
        </div>
        <textarea
          rows={1}
          spellCheck="false"
          value={titleText}
          onChange={handleInput}
          className="block min-h-[52px] max-h-[52px] p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-700"
        />
      </div>
      <div className="border-2 border-gray-200 overflow-hidden">
        <TiptapContainer />
      </div>
    </div>
  );
}
DailyDisplayPresenter.propTypes = {
  dailyInfo: PropTypes.shape({
    day: PropTypes.string,
    editorContent: PropTypes.string,
    locdate: PropTypes.string,
    titleText: PropTypes.string,
  }),
  titleText: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
DailyDisplayPresenter.defaultProps = {
  dailyInfo: PropTypes.shape({
    day: '',
    editorContent: '',
    locdate: '',
    titleText: '',
  }),
};
export default React.memo(DailyDisplayPresenter);

import React from 'react';
import PropTypes from 'prop-types';
import Tiptap from '@/pages/Components/Tiptap/Tiptap';
import RoundLine from './RoundLine';
import { TITLE } from '@/Constants/dailyConstant';

function DailyDisplayPresenter({ currentDaily, content, handleInput }) {
  return (
    <div className="h-fit mx-20 my-5 p-2 border-4 border-gray-100 shadow-sm">
      <RoundLine />
      <div className="flex text-center text-xl font-bold border">
        <div className="basis-1/2">{currentDaily ? currentDaily.locdate : null}</div>
        <div className="basis-1/2 text-white bg-slate-400">
          {currentDaily ? currentDaily.day : null}
        </div>
      </div>
      <div className="m-5 my-20">
        <div className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">
          {TITLE}
        </div>
        <textarea
          rows={1}
          spellCheck="false"
          value={content}
          onChange={handleInput}
          className="block min-h-[52px] max-h-[52px] p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-300 focus:border-blue-300"
        />
      </div>
      <div className="border-2 border-gray-200 overflow-hidden">
        <Tiptap />
      </div>
    </div>
  );
}
DailyDisplayPresenter.propTypes = {
  currentDaily: PropTypes.object,
  content: PropTypes.string,
  handleInput: PropTypes.func,
};
export default DailyDisplayPresenter;

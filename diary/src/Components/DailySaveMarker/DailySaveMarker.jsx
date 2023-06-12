/* eslint-disable no-alert */
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useAxios from 'src/hooks/useAxios';
import { DAILY_CONST, POST_DAILY_UPDATE_OPT, POST_DAILY_WRITE_OPT } from 'src/Constants/dailyConstant';
import { setDailyIsWriten } from 'src/Redux/action';

const DailySaveMarker = ({ axiosCode }) => {
  const dispatch = useDispatch();
  const dailyInfo = useSelector(
    ({ dailyReducer: { dailyContents } }) => dailyContents[
      DAILY_CONST.MARK(dailyContents.currentDate)
    ],
  );
  const { operation } = useAxios();

  const handleSave = () => {
    if (!dailyInfo.isWriten) {
      if (axiosCode === 'DAR10001') operation(POST_DAILY_UPDATE_OPT(dailyInfo));
      if (axiosCode === 'DAR10002') operation(POST_DAILY_WRITE_OPT(dailyInfo));
      dispatch(setDailyIsWriten({ isWriten: !dailyInfo.isWriten }));
    }
  };

  return (
    <div
      onClick={handleSave}
      className={`relative flex items-center w-24 h-24 mt-1 mr-5 cursor-pointer hover:opacity-100 ${dailyInfo?.isWriten ? 'opacity-100' : 'opacity-60'}`}
      aria-hidden="true"
    >
      <Image
        src="/Img/bookmark.png"
        width={500}
        height={500}
        alt="bookmark"
        priority
      />
      <div className={`absolute p-10 text-center hover:hidden ${dailyInfo?.isWriten ? 'hidden' : ''}`}>
        <p>s</p>
        <p>a</p>
        <p>v</p>
        <p>e</p>
      </div>
    </div>
  );
};

DailySaveMarker.propTypes = {
  axiosCode: PropTypes.string.isRequired,
};
export default React.memo(DailySaveMarker);

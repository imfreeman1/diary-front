/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useAxios from 'src/hooks/useAxios';
import { setSave } from 'src/Redux/action';

const DailyTopMark = ({ isSave, setIsSave, axiosCode }) => {
  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContents,
  );
  const DailyInfo = useSelector(
    (state) => state.dailyReducer.dailyContents[`D-${currentDate}`],
  );
  console.log(DailyInfo);
  const dispatch = useDispatch();
  // test의 기능은 response를 불러올 때 저장,
  // res를 못불러온다면 이전꺼를 저장해두려고
  // const [test, setTest] = useState([]);
  const {
    response, error, loading, operation,
  } = useAxios();

  const postWriteAxios = () => {
    operation({
      method: 'post',
      url: '/daily/write/',
      payload: {
        title: DailyInfo.titleText,
        content: DailyInfo.editorContent,
        date: DailyInfo.locdate,
      },
    });
  };
  const postUpdateAxios = () => {
    operation({
      method: 'post',
      url: '/daily/update',
      payload: {
        title: DailyInfo.titleText,
        content: DailyInfo.editorContent,
        date: DailyInfo.locdate,
      },
    });
  };
  // DAR10001 다이어리 존재 => 수정
  // DAR10002 다이어리 존재x => 생성

  const handleSave = () => {
    if (DailyInfo.titleText
      || (DailyInfo.editorContent && DailyInfo.editorContent !== '<p></p>')) {
      if (axiosCode === 'DAR10001') postUpdateAxios();
      if (axiosCode === 'DAR10002') postWriteAxios();
      setIsSave(true);
      dispatch(setSave({
        locdate: DailyInfo.locdate,
        titleText: DailyInfo.titleText,
        editorContent: DailyInfo.editorContent,
      }));
      alert('저장되었습니다.');
    }
  };

  return (
    <div
      className={`absolute right-0 w-24 h-24 mr-5 cursor-pointer hover:opacity-100 ${isSave ? 'opacity-100' : 'opacity-50'}`}
      onClick={handleSave}
      aria-hidden="true"
    >
      <Image
        src="/Img/bookmark.png"
        width={500}
        height={500}
        alt="bookmark"
        priority
      />
      <div className={`absolute top-0 right-1/2 hover:hidden ${isSave ? 'hidden' : ''}`}>
        <p>s</p>
        <p>a</p>
        <p>v</p>
        <p>e</p>
      </div>
    </div>
  );
};

DailyTopMark.propTypes = {
  isSave: PropTypes.bool.isRequired,
  setIsSave: PropTypes.func.isRequired,
  axiosCode: PropTypes.string.isRequired,
};
export default DailyTopMark;

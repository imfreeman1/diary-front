/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setEditor } from '../../Redux/action';
import useGetEditor from '../../Utils/useGetEditor';
import TiptapPresenter from './TiptapPresenter';
/**
 *
 * @param {currentDate} date 현재 날짜
 * @param {Daily} obj 현재 페이지 정보
 * "D-currentDate":{day: "Fri",editorContent: "",locdate: "2023-03-24",titleText: ""}
 * @param {editor} 에디터 설정값들
 * @returns
 */

const TiptapContainer = ({ setIsSave, resContent }) => {
  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContents,
  );
  const Daily = useSelector(
    (state) => state.dailyReducer.dailyContents[`D-${currentDate}`],
  );
  const dispatch = useDispatch();
  const editor = useGetEditor();
  // 날짜가 바뀌면 editor content에 날짜에 맞는 content 불러오기
  useEffect(() => {
    editor?.off('update');
    if (editor && !editor.isDestroyed && Daily) {
      editor?.commands.setContent(Daily.editorContent);
    }
    if (editor && !editor.isDestroyed && resContent) {
      editor?.commands.setContent(resContent);
    }
    editor?.on('update', () => {
      const html = editor.getHTML();
      dispatch(setEditor({ locdate: currentDate, editorContent: html }));
      setIsSave(false);
    });
  }, [dispatch, editor, currentDate, resContent]);

  return (
    <TiptapPresenter editor={editor} />
  );
};

TiptapContainer.propTypes = {
  setIsSave: PropTypes.func.isRequired,
  resContent: PropTypes.string.isRequired,
};
export default TiptapContainer;

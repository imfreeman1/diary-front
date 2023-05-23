import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useGetEditor from '../../Utils/useGetEditor';
import WeeklyTiptapPresenter from './WeeklyTiptapPresenter';

/**
 *
 * @param {currentDate} date 현재 날짜
 * @param {Daily} obj 현재 페이지 정보
 * "D-currentDate":{day: "Fri",editorContent: "",locdate: "2023-03-24",titleText: ""}
 * @param {editor} 에디터 설정값들
 * @returns
 */

const WeeklyTiptapContainer = ({
  weekly, weekTextContent, handleChange, isEditable,
}) => {
  const dispatch = useDispatch();
  const editor = useGetEditor();
  // 날짜가 바뀌면 editor content에 날짜에 맞는 content 불러오기
  useLayoutEffect(() => {
    editor?.off('update');
    if (editor && !editor.isDestroyed && weekly) {
      editor?.commands.setContent(weekTextContent);
    }
    editor?.on('update', () => {
      if (editor.getText().trim() === '') return;
      const html = editor.getHTML();
      handleChange(html);
    });
    editor?.setEditable(isEditable);
  }, [dispatch, editor, weekly, weekTextContent, handleChange, isEditable]);

  return (
    <WeeklyTiptapPresenter editor={editor} isEditable={isEditable} />
  );
};

WeeklyTiptapContainer.propTypes = {
  weekly: PropTypes.shape({
    day: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    locdate: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
  }).isRequired,
  weekTextContent: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};

export default WeeklyTiptapContainer;

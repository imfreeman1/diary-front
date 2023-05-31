/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useLayoutEffect } from 'react';
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
  weekly, weekTextContent, textHandleChange, isEditable,
}) => {
  const editor = useGetEditor();
  // 날짜가 바뀌면 editor content에 날짜에 맞는 content 불러오기
  useLayoutEffect(() => {
    editor?.off('update');
    if (editor && !editor.isDestroyed && weekly) { editor?.commands.setContent(weekTextContent); }
    editor?.on('update', () => {
      if (editor.getText().trim() === '') return;
      textHandleChange(editor.getHTML());
    });
    editor?.setEditable(isEditable);
  }, [editor, weekly, weekTextContent, textHandleChange, isEditable]);

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
  textHandleChange: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};

export default WeeklyTiptapContainer;

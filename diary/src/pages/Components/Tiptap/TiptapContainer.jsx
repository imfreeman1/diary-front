import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditor } from '@/Redux/action';
import useGetEditor from '@/pages/Utils/useGetEditor';
import TiptapPresenter from './TiptapPresenter';

/**
 *
 * @param {currentDate} date 현재 날짜
 * @param {daily} obj 현재 페이지 정보
 * "D-currentDate":{day: "Fri",editorContent: "",locdate: "2023-03-24",titleText: ""}
 * @param {editor} 에디터 설정값들
 * @returns
 */

const TiptapContainer = () => {
  const { currentDate } = useSelector(
    (state) => state.dailyReducer.dailyContent,
  );
  const daily = useSelector(
    (state) => state.dailyReducer.dailyContent[`D-${currentDate}`],
  );
  const dispatch = useDispatch();

  const editor = useGetEditor();
  // 날짜가 바뀌면 editor content에 날짜에 맞는 content 불러오기
  console.log(editor, typeof (editor));
  useEffect(() => {
    editor?.off('update');
    if (editor && !editor.isDestroyed && daily) {
      editor?.commands.setContent(daily.editorContent);
    }
    editor?.on('update', () => {
      const html = editor.getHTML();
      dispatch(setEditor({ locdate: daily.locdate, html }));
    });
  }, [dispatch, editor, daily]);

  return (
    <TiptapPresenter editor={editor} />
  );
};

export default TiptapContainer;

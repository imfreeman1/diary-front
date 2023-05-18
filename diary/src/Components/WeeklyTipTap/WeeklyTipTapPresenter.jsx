import React from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import PropTypes from 'prop-types';
import WeeklyEditorMenuBar from './WeeklyEditorMenuBar';

const WeeklyTiptapPresenter = ({ editor, isEditable }) => (
  <div className="p-3 text-left overflow-hidden ">
    {
      isEditable === true && (
      <div className="w-full h-[56px] flex border-2 text-base text-gray-800">
        <WeeklyEditorMenuBar editor={editor} />
      </div>
      )
    }
    <div className="relative px-3">
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[50px] before:bg-gray-300 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[82px] before:bg-gray-300 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[114px]  before:bg-red-200 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[146px]  before:bg-gray-300 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[178px] before:bg-gray-300 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[210px] before:bg-red-200 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[242px]  before:bg-gray-300 before:top-0 before:absolute" />
      <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[274px]  before:bg-gray-300 before:top-0 before:absolute" />
    </div>

    <div className="border-none w-full h-96 overflow-y-auto">
      <EditorContent editor={editor} />
    </div>
  </div>
);

WeeklyTiptapPresenter.propTypes = {
  editor: PropTypes.instanceOf(Editor),
  isEditable: PropTypes.bool.isRequired,
};
WeeklyTiptapPresenter.defaultProps = {
  editor: {},
};
export default WeeklyTiptapPresenter;

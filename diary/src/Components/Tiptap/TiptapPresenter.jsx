import React, { useState, useEffect } from 'react';
import { Editor, EditorContent } from '@tiptap/react';
import PropTypes from 'prop-types';
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi';
import EditorMenuBar from './EditorMenuBar';

const TiptapPresenter = ({ editor }) => {
  const [isEditable, setIsEditable] = useState(false);
  useEffect(() => {
    if (editor) editor.setEditable(isEditable);
  }, [isEditable, editor]);

  const [isErase, setIsErase] = useState(false);
  useEffect(() => {
    editor?.commands.clearContent();
    setIsErase(false);
  }, [isErase, editor]);

  return (
    <div className="relative flex min-w-screen h-[530px] bg-gray-200 items-center justify-center p-5">
      <div className="absolute top-0 right-0 p-2">
        {isEditable
          ? <BiFullscreen className="cursor-pointer border-2 border-dashed bg-white w-8 h-8 hover:w-9 hover:h-9 shadow" onClick={() => setIsEditable(false)} />
          : <BiExitFullscreen className="cursor-pointer border-2 border-dashed bg-white w-8 h-8 hover:w-9 hover:h-9 shadow" onClick={() => setIsEditable(true)} />}
      </div>
      <div className="w-full h-[490px] mx-auto rounded-xl bg-white shadow-lg p-5">
        <div className="border border-gray-200 overflow-hidden rounded-md">
          {isEditable
            ? (
              <div className="w-full flex border-b border-gray-200 text-xl text-gray-600 justify-between">
                <EditorMenuBar editor={editor} setIsErase={setIsErase} />
              </div>
            )
            : null}

          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[50px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[82px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[114px] before:mx-5 before:bg-red-200 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[146px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[178px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[210px] before:mx-5 before:bg-red-200 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[242px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[274px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[306px] before:mx-5 before:bg-red-200 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[338px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[370px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[402px] before:mx-5 before:bg-red-200 before:top-0 before:absolute" />
          <div className="relative before:content-[''] before:w-[710px] before:h-[1px] before:mt-[434px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute" />

          <div className={`relative w-full ${isEditable ? 'h-[415px]' : 'h-[456px]'} overflow-y-auto`}>
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

TiptapPresenter.propTypes = {
  editor: PropTypes.instanceOf(Editor),
};
TiptapPresenter.defaultProps = {
  editor: {},
};
export default TiptapPresenter;

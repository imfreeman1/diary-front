import React from 'react';
import {
  BiBold, BiItalic, BiStrikethrough, BiText, BiHighlight, BiEraser, BiUndo, BiRedo,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import EditorMenuBarButton from './EditorMenuBarButton';

const EditorMenuBar = ({ editor, dailyContentsErase }) => {
  if (!editor) return null;

  return (
    <>
      <div className="flex">
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
          className={editor.isActive('bold') ? 'is-active' : ''}
          content={<BiBold size="28" className="w-14" />}
        />
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
          className={editor.isActive('italic') ? 'is-active' : ''}
          content={<BiItalic size="28" className="w-14" />}
        />
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
          className={editor.isActive('strike') ? 'is-active' : ''}
          content={<BiStrikethrough size="28" className="w-14" />}
        />
        <input
          type="color"
          onInput={(event) => editor.chain().focus().setColor(event.target.value).run()}
        // value={editor.getAttributes('textStyle').color}
          value="#000000"
          className="outline-none focus:outline-none border-r border-gray-200 w-14 h-10 hover:text-indigo-500 active:bg-gray-50"
        />
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetColor().run()}
          className="border-r border-gray-200"
        >
          <BiText size="28" className="w-14 text-black" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={`border-r border-gray-200 ${editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}`}
        >
          <BiText size="28" className="w-14 text-[#958DF1]" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#F98181').run()}
          className={`border-r border-gray-200 ${editor.isActive('textStyle', { color: '#F98181' }) ? 'is-active' : ''}`}
        >
          <BiText size="28" className="w-14 text-[#F98181]" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
          className={`border-r border-gray-200 ${editor.isActive('textStyle', { color: '#FBBC88' }) ? 'is-active' : ''}`}
        >
          <BiText size="28" className="w-14 text-[#FBBC88]" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
          className={`border-r border-gray-200 ${editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : ''}`}
        >
          <BiText size="28" className="w-14 text-[#B9F18D]" />
        </button>
        <div className="border-r border-gray-200 w-1" />
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
          className={editor.isActive('highlight') ? 'is-active' : ''}
          content={<BiHighlight size="28" className="w-14 text-[#ffcc00]" />}
        />
        <EditorMenuBarButton
          onClick={dailyContentsErase}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .clearContent()
              .run()
          }
          content={<BiEraser size="28" className="w-14" />}
        />
      </div>
      <div className="flex">
        <div className="border-r border-gray-200 w-1" />
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .undo()
                    .run()
                }
          content={<BiUndo size="28" className="w-14" />}
        />
        <EditorMenuBarButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
          content={<BiRedo size="28" className="w-14" />}
        />
      </div>
    </>
  );
};
EditorMenuBar.propTypes = {
  editor: PropTypes.instanceOf(Editor),
  dailyContentsErase: PropTypes.func.isRequired,
};
EditorMenuBar.defaultProps = {
  editor: {},
};
export default EditorMenuBar;

import React from 'react';
import {
  BiBold, BiAlignLeft, BiAlignMiddle, BiAlignRight, BiHighlight, BiStrikethrough,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Editor } from '@tiptap/react';
import WeeklyEditorMenuBarButton from './WeeklyEditorMenuBarButton';

const WeeklyEditorMenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-row flex-1">
      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can().chain().focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
        content={<BiBold size="28" />}
      />
      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={
          !editor.can().chain().focus()
            .toggleHighlight()
            .run()
        }
        className={editor.isActive('highlight') ? 'is-active' : ''}
        content={<BiHighlight size="28" />}
      />
      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can().chain().focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
        content={<BiStrikethrough size="28" />}
      />
      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        disabled={
          !editor.can().chain().focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        content={<BiAlignLeft size="28" />}
      />

      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        disabled={
          !editor.can().chain().focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        content={<BiAlignMiddle size="28" />}
      />

      <WeeklyEditorMenuBarButton
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        disabled={
          !editor.can().chain().focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        content={<BiAlignRight size="28" />}
      />
      <input
        type="color"
        onInput={(event) => editor.chain().focus().setColor(event.target.value).run()}
        // value={editor.getAttributes('textStyle').color}
        value="#000000"
        className="outline-none focus:outline-none border-r border-gray-200 flex-1 justify-center items-center h-10 hover:text-indigo-500 active:bg-gray-50"
      />

    </div>
  );
};
WeeklyEditorMenuBar.propTypes = {
  editor: PropTypes.instanceOf(Editor),
};
WeeklyEditorMenuBar.defaultProps = {
  editor: {},
};
export default WeeklyEditorMenuBar;

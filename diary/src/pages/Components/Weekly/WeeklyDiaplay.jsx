import React from 'react'
import Paragraph from "@tiptap/extension-paragraph";
import { useEditor, EditorContent, mergeAttributes, ReactNodeViewRenderer } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit'
import DragHandle from "./DragHandle";

const CustomParagraph = Paragraph.extend({
  draggable: true,
  renderHTML({ HTMLAttributes }) {
    return [
      "p",
      mergeAttributes(HTMLAttributes, { "data-type": "draggable-item" }),
      0
    ];
  },
  addNodeView() {
    return ReactNodeViewRenderer(DragHandle);
  }
});

const WeeklyDiaplay = ({day}) => {

  const weekEditor = useEditor({
        extensions: [
          StarterKit,
          CustomParagraph,
        ],
        content: `
          <p>This is a boring paragraph.</p>
          <div data-type="draggable-item">
            <p>Followed by a fancy draggable item.</p>
          </div>
          <div data-type="draggable-item">
            <p>And another draggable item.</p>
            <div data-type="draggable-item">
              <p>And a nested one.</p>
              <div data-type="draggable-item">
                <p>But can we go deeper?</p>
              </div>
            </div>
          </div>
          <p>Let’s finish with a boring paragraph.</p>
        `,
  })

  return (
    <div className='w-[240px] h-[450px] bg-white border-2 border-black border-solid'>
        <div className='text-xl font-bold mt-10'>{day}</div>
        <EditorContent editor={weekEditor}></EditorContent>
    </div>
  )
}

export default WeeklyDiaplay
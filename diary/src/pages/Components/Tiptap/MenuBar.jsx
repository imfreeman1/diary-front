import React from 'react'
import MenuBarButton from './MenuBarButton';
import { BiBold, BiItalic, BiStrikethrough, BiText, BiUndo, BiRedo } from "react-icons/bi";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <MenuBarButton         
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''} 
        content={<BiBold size="28" className='w-14'/>} />
      <MenuBarButton         
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
        content={<BiItalic size="28" className='w-14'/>} />
      <MenuBarButton         
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
        content={<BiStrikethrough size="28" className='w-14'/>} />
      <input 
        type="color" 
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color}
        className="outline-none focus:outline-none border-r border-gray-200 w-14 h-10 hover:text-indigo-500 active:bg-gray-50"
      />
      <MenuBarButton onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                      className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
                      content={<BiText size="28" className='w-14 text-[#958DF1]'/>}
      />
      <MenuBarButton onClick={() => editor.chain().focus().setColor('#F98181').run()}
                      className={editor.isActive('textStyle', { color: '#F98181' }) ? 'is-active' : ''}
                      content={<BiText size="28" className='w-14 text-[#F98181]'/>}
      />
      <MenuBarButton onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
                      className={editor.isActive('textStyle', { color: '#FBBC88' }) ? 'is-active' : ''}
                      content={<BiText size="28" className='w-14 text-[#FBBC88]'/>}
      />      
      <MenuBarButton onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
                      className={editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : ''}
                      content={<BiText size="28" className='w-14 text-[#B9F18D]'/>}
      /> 
      <MenuBarButton onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
                      className={editor.isActive('textStyle', { color: '#70CFF8' }) ? 'is-active' : ''}
                      content={<BiText size="28" className='w-14 text-[#70CFF8]'/>}
      />       
      <MenuBarButton onClick={() => editor.chain().focus().unsetColor().run()}
                    content={<BiText size="28" className='w-14 text-black'/>}
                                            />
      <MenuBarButton         
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .undo()
                    .run()
                }
        content={<BiUndo size="28" className='w-14'/>} />
      <MenuBarButton         
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        content={<BiRedo size="28" className='w-14'/>} />

    </>
  )
}

export default MenuBar;
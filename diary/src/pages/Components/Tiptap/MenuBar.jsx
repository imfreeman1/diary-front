import React from 'react'
import MenuBarButton from './MenuBarButton';

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
        content="bold" />
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
        content="italic" />
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
        content="strike" />
      <MenuBarButton         
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        content="h1" />
      <MenuBarButton         
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .undo()
                    .run()
                }
        content="undo" />
      <MenuBarButton         
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        content="redo" />
    </>
  )
}

export default MenuBar;
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';

const useGetEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color, Highlight, TextAlign.configure({
      types: ['heading', 'paragraph'],
    })],
    editorProps: {
      attributes: {
        class:
              'text-base leading-8 m-5 focus:outline-none',
        spellcheck: 'false',
      },
    },
    content: '',
    injectCSS: false,
    parseOptions: {
      preserveWhitespace: true,
    },
    enablePasteRules: [Color, 'horizontalRule'],
  });
  return editor;
};

export default useGetEditor;

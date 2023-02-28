import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import MenuBar from './MenuBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setEditorContent } from '@/Redux/action'

const Tiptap = ({date}) => {
    console.log("date",date)
    const offset = date.getTimezoneOffset() * 60000
    const dateOffset = new Date(date.getTime() - offset)
    const dailyDate = dateOffset.toISOString().substring(0, 10)

    const dispatch = useDispatch();
    const {content} = useSelector((state)=>state.editorContentReducer)
    console.log(content[dailyDate], content, dailyDate)
    
    const editor = useEditor({
      extensions: [ StarterKit, TextStyle, Color ],
      editorProps: {
        attributes: {
          class: 'prose sm:prose lg:prose-lg xl:prose-2xl text-lg m-5 focus:outline-none',
          spellcheck: 'false',
        },
      },
      content: "",
      autofocus: true,
      injectCSS: false,
      onUpdate: ({editor}) => {
        const html = editor.getHTML()
        console.log("확인", dailyDate, html)
        dispatch(setEditorContent({locdate: dailyDate, html: html}))
        console.log("확인2",content)
      },
    })
    useEffect(() => {
      if(editor) editor.commands.setContent(content[dailyDate])
    }, [date])
    

    return (
      <>
      <div>
        <div className="min-w-screen min-h-fit bg-gray-200 flex items-center justify-center p-5">
          <div className="w-full max-w-6xl mx-auto rounded-xl bg-white shadow-lg p-5 text-black">
            <div className="border border-gray-200 overflow-hidden rounded-md">
              <div className="prose w-full flex border-b border-gray-200 text-xl text-gray-600">
                  <MenuBar editor={editor} />
              </div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[50px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[76px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[104px] before:mx-5 before:bg-red-200 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[130px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[159px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[186px] before:mx-5 before:bg-red-200 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[212px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[242px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[268px] before:mx-5 before:bg-red-200 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[298px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[328px] before:mx-5 before:bg-gray-300 before:top-0 before:absolute"></div>
              <div className="relative before:content-[''] before:w-full before:h-[1px] before:mt-[358px] before:mx-5 before:bg-red-200 before:top-0 before:absolute"></div>
              <div className="relative w-full h-96 overflow-y-auto">
                  <EditorContent editor={editor} />
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
    )
  }

export default Tiptap
import { EditorProvider, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuButtons from './MenuButtons'


const extensions = [
    StarterKit
  ]
  
  const content = '<p>Hello World!</p>'
  
  const Tiptap = ({setContents}:{setContents:(data:string)=>void}) => {
    return (
      <EditorProvider extensions={extensions} content={content}
      //@ts-ignore
      editorProps= {
        {
        attributes: {
          class: 'w-full h-96 border focus:outline-none p-4 rounded-md',
        },
      }}
      onUpdate={({ editor })=>{
        setContents(editor.getHTML());
    }}>
        <FloatingMenu>
          <MenuButtons/>
        </FloatingMenu>
        <BubbleMenu><MenuButtons/></BubbleMenu>
      </EditorProvider>
    )
  }
  
  export default Tiptap
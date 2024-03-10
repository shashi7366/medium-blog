import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";

import { useCurrentEditor } from "@tiptap/react"


function MenuButtons() {

    const { editor } = useCurrentEditor();

    return <div className="bg-white px-4 py-1 shadow-xl shadow-slate-500 flex">
        <div className="w-4 h-4 bg-white border-none rounded-full flex flex-col items-center ring-2 p-0.5 mr-2"
            onClick={() => {
                editor?.chain().focus().toggleBold().run();
            }}><FaBold /></div>

        <div className="w-4 h-4 bg-white border-none rounded-full flex flex-col items-center ring-2 p-0.5 mr-2"
            onClick={() => {
                editor?.chain().focus().toggleItalic().run();
            }}><FaItalic /></div>


    </div>
}

export default MenuButtons
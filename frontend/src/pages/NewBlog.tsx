import Appbar from "../components/Appbar";
import { CiCirclePlus } from "react-icons/ci";
import Tiptap from "../components/Editor/Tiptap";
import { useState } from "react";
import {postBlog as postBlogUrl} from "../utils/ApiRoutes"
import { useNavigate } from "react-router-dom";

function NewBlog(){

    const [content,setContent]=useState("");
    const [title,setTitle]=useState("");

    const navigate=useNavigate();
   
    function postBlog(){
        fetch(postBlogUrl,{
            method:"POST",
            headers:{
                "content-type":"application/json",
                "authorization":localStorage.getItem('medium-blog') || ""
            },
            body:JSON.stringify({
                title:title,
                content:content
            })
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            navigate(`/read/${data.id}`);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return <div className="w-full h-screen">
        <Appbar/>

        <div className="w-full flex flex-col items-center gap-8">
            {/* title of Post */}
            <div className="w-[90%] max-w-[90%] grid grid-cols-12 border rounded-xl h-16 gap-2">
                <div className="col-span-1 flex justify-center"><CiCirclePlus className="h-full text-4xl"/></div>
                <input 
                type="text"
                value={title}
                placeholder="Title of your post"
                className="col-span-10 h-full border-none focus:outline-none"
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}
                />

            </div>

            <div className="w-[90%] max-w-[90%]">
                <Tiptap setContents={setContent}/>
            </div>
            <button className="px-4 py-1 text-white bg-blue-600 border-none rounded-lg"
            onClick={postBlog}
            >Submit</button>
        </div>
    </div>
}

export default NewBlog;
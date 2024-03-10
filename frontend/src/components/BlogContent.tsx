import { Avatar } from "./BlogCard";
import parse from "html-react-parser";

const aboutDefault="Master of mirth, purveyor of puns and funniest person in the kingdom."


function BlogContent({title,content, time,name,about=aboutDefault}:{
    title:string,
    content:string,
    time:string,
    name:string | null,
    about?:string
}){
    
    return <div className="w-full grid grid-cols-12 p-8 gap-2">

        {/* content div */}

        <div className="col-span-12 md:col-span-8 flex flex-col items-center">

            {/* title div */}
            <div className="text-4xl font-bold w-[80%]">{title}</div>

            {/* post date div */}
            <div className="text-slate-500 text-md w-[80%]">Posted on {time}</div>

            {/* content div */}
            <div className="text-slate-700 text-lg font-normal w-[80%] text-start mt-8">{parse(content)}</div>

        </div>


        {/* author info div */}

        <div className="col-span-12 md:col-span-4">
            <div className="font-semibold px-4">Author</div>
            <div className="mt-4 grid grid-cols-12">
                <div className="col-span-2 flex flex-col justify-center items-center">
                <Avatar authorName={name || "Anonymous"} size="big" />
                </div>
                <div className="col-span-10">
                    <div className="font-semibold text-xl">{name}</div>
                    <div className="text-slate-500">{about}</div>
                </div>
            </div>
        </div>
    </div>
}

export default BlogContent;
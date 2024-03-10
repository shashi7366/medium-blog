import {Link} from "react-router-dom"

function BlogCard({title,description,authorName,time,id}:{
    title:string,
    description:string,
    authorName:string | null,
    time:string,
    id:string
}){

    return <Link to={`/read/${id}`} className="border-b border-gray-300 py-4 min-w-[90%] max-w-[90%] md:max-w-[60%] md:min-w-[60%]">
        <div>
        {/* ......1 */}
        <div className="flex gap-2 items-center">
            <Avatar authorName={authorName || "Anonymous"}/>
            <div className="text-xs font-normal">{authorName}</div>
            <div className="text-slate-400 font-light text-xs">{time}</div>
        </div>

{/* ..............2 */}
        <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-sm text-slate-700 font-thin">{description.slice(0,100)}...</div>
        </div>


{/* ........3 */}
        <div>
            {Math.floor((description.length)/100)} min(s) read
        </div>
    </div>
    </Link>
}



export function Avatar({authorName,size="small"}:{authorName:string,size?:string}){
    let width;
    let height;

    if(size=="big"){
        width="w-[40px]";
        height="h-[40px]";
    }else if(size=="small"){
        width="w-[16px]";
        height="h-[16px]";
    }
    return <div className={`${width} ${height} bg-slate-600 text-white text-xs border-none rounded-full flex justify-center items-center p-[2px] border-box cursor-pointer ring-2 hover:ring-4`}>
        {(authorName[0]).toUpperCase()}
    </div>
}

export default BlogCard;
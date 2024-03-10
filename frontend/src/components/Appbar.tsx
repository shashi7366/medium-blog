import {Avatar} from "./BlogCard";
import {useNavigate} from "react-router-dom"

function Appbar(){

    const navigate=useNavigate();

    return <div className="flex justify-between px-16 w-full pt-2 pb-4 border-b mb-16">
        <div className="text-4xl font-semibold hover:shadow-md hover:shadow-slate-300">Medium</div>
        <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-400 text-white border-none rounded-3xl"
            onClick={()=>{
                navigate("/new");
            }}>New</button>
        <Avatar authorName="Shashikant" size="big"/>
        </div>
        
    </div>
}

export default Appbar;
import {Avatar} from "./BlogCard";
import {useNavigate} from "react-router-dom";
import {useRecoilValueLoadable} from "recoil";
import { currentUserAsync } from "../store/currentUserAtom";
import {useState} from "react"

function Appbar(){


    let user=useRecoilValueLoadable(currentUserAsync);

    let [show,setShow]=useState(false);

    const navigate=useNavigate();

    let name="Anonymous";

    if(user.state=='hasValue'){
        if(user.contents.name!=null){
            name=user.contents.name;
        }
    }

    

    return <div className="flex justify-between px-16 w-full pt-2 pb-4 border-b mb-16">
        <div className="text-4xl font-semibold hover:shadow-md hover:shadow-slate-300">Medium</div>
        <div className="flex gap-4">
            <button className="px-4 py-2 bg-green-400 text-white border-none rounded-3xl"
            onClick={()=>{
                navigate("/new");
            }}>New</button>
            <div className="relative" onClick={()=>{
                setShow(prev=>{return !prev})
            }}>
                <Avatar authorName={name?name:"Anonymous"} size="big"/>
                {show && <div className="absolute right-6 w-48 h-48 min-h-48 flex flex-col gap-2 bg-white border rounded-lg border-box px-2 py-4">
                    <div className="border-b text-center font-semibold cursor-pointer"
                    onClick={()=>{
                        localStorage.removeItem("medium-blog");
                        navigate("/");
                    }}>Logout</div>
                </div>}
            </div>
        
        </div>
        
    </div>
}

export default Appbar;
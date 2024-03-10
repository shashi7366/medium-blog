import Appbar from "../components/Appbar";
import { useEffect,useState} from "react";
import BlogContent from "../components/BlogContent";
import {getBlog} from "../utils/ApiRoutes";
import {useParams} from "react-router-dom";

import ReadBlogSkelton from "../components/skeltons/ReadBlogSkelton";


function ReadBlog(){

    const {id}=useParams();

    const [loading,setLoading]=useState(true);

    const [blog,setBlog]=useState<{
        id:string,
        title:string,
        content:string,
        author:{
            name:string | null
        }
    }>();

   
    useEffect(()=>{

        fetch(`${getBlog}/${id}`,{
            method:"GET",
            headers:{
                "content-type":"application/json",
                "authorization":localStorage.getItem('medium-blog') || ""
            }
        })
        .then((res)=>{
            return res.json();
        }).then(data=>{
            setLoading(false);
            setBlog(data.post);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);


    if(loading){
        return <div className="w-screen h-screen">
            <Appbar/>
            <ReadBlogSkelton/>
        </div>
    }

    

    return <div className="w-full">
        <Appbar/>
        {
            blog && <BlogContent title={blog.title} content={blog.content} name={blog.author.name} time={"Mar 6,2024"}/>
        }
    </div>
}

export default ReadBlog;
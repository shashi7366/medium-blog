import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogsSkelton from "../components/skeltons/BlogsSkelton";
import {  useRecoilValueLoadable } from "recoil";
import { allBlogsAtom } from "../store/currentUserAtom";






function Blogs(){

    

   // const [blogss,setBlogss]=useState<blog[]>();
   const blogss=useRecoilValueLoadable(allBlogsAtom);
   // const [loading,setLoading]=useState(true)

    // useEffect(()=>{

    //     const token=localStorage.getItem('medium-blog');

    //     fetch(allBlogs,{
    //         method:"POST",
    //         headers:{
    //             "content-type":"application/json",
    //             "authorization":token?token:""
    //         }
    //     })
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setLoading(false);
    //         setBlogss(data.posts)
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // },[]);

    

    console.log(blogss);

    if(blogss.state=='loading'){
        return <div className="min-w-screen h-screen">
            <Appbar/>
            <BlogsSkelton />
            <BlogsSkelton />
            <BlogsSkelton />
            <BlogsSkelton />
            <BlogsSkelton />
        </div>
    }

    return <div className="w-full flex flex-col items-center">
        <Appbar/>
        
        {blogss.state=='hasValue' && blogss.contents.map((blog:{title:string,content:string,id:string,author:{name:string}},index:number)=>{
            return <BlogCard key={index} title={blog.title} description={blog.content} authorName={blog.author.name} time={'Dec 3,2023'} id={blog.id}/>
        })}
    </div>
}

export default Blogs;
import {atom,selector} from "recoil";
import {allBlogs} from "../utils/ApiRoutes";



// const currentUserToken=atom({
//     key:"currentUserToken",
//     default:localStorage.getItem('medium-blog')
// })


export const allBlogsAtom=atom({
    key:"allBlogs",
    default:selector({
        key:"allBlogsAsyncSelector",
        get:async ()=>{
            let data=await fetch(allBlogs,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    "authorization":localStorage.getItem('medium-blog')||""
                }
            });

            data=await data.json();
            //@ts-ignore
            return data.posts;
          
        }
    })
});


export const currentUser=atom({
    key:"currentUser",
    default:{
        id:"",
        name:"Anonymous"
    }
})

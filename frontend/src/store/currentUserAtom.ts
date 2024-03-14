import {atom,selector} from "recoil";
import {allBlogs,meRoute} from "../utils/ApiRoutes";
import axios from "axios";



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
});


export const currentUserAsync=atom({
    key:"currentUserAsync",
    default:selector({
        key:"currentUserAsync selector",
        get:async ()=>{

           const token=localStorage.getItem('medium-blog');

           let res=await axios.post(meRoute,{token:token});

            console.log(res.data);
           
            return res.data.user;

        }
    })
})

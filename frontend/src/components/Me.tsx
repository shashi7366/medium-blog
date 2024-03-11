import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {meRoute} from "../utils/ApiRoutes";
import {useSetRecoilState} from "recoil";
import { currentUser } from "../store/currentUserAtom";


function Me(){

    const navigate=useNavigate();
    const setUser=useSetRecoilState(currentUser)

    useEffect(()=>{
        const token=localStorage.getItem("medium-blog");

        console.log(token);

        if(token){

            fetch(meRoute,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({token})
            })
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setUser(data.user);
                navigate("/blogs");
            })
            .catch(err=>{
                console.log(err);
                navigate("/signup");
            })

        }else{
            navigate("/signup");
        }
    },[])


    return null
}

export default Me;
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Heading from "./Heading";
import ButtonFullWidth from "./ButtonFullWidth";

import {signup,signin} from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";


interface formDataType {
    username: string,
    email: string,
    password: string
}

function Auth({type}:{type:string}) {

    const [formData, setFormData] = useState<formDataType>({
        username: "",
        email: "",
        password: ""
    });

    const navigate=useNavigate();

    function onClickHandler(){
        let data={};

        if(type=="signin"){
            data={email:formData.email,password:formData.password}
        }else{
            data={name:formData.username,email:formData.email,password:formData.password}
        }

        const path=type=="signin"?signin:signup;

        fetch(path,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(res=>{
            return res.json();
        })
        .then(data=>{
            
            localStorage.setItem('medium-blog',`${data.token}`);
            navigate("/");
        })
    }

    return <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] lg:w-[50%]">
            <Heading heading={type=="signin"?'Sign In':"Create an Account"} />
            <div className="text-gray-400 text-lg font-normal w-full text-center">{type=="signin"?"Don't have an account? ":"Already have an account?"}<Link to={type=="signin"?"/signup":"/signin"}>{type=="signin"?"Sign Up":"Sign In"}</Link></div>
            {type!="signin"?<Input placeholder="" type="text" label="Username" onChange={(e)=>{
                setFormData({...formData,username:e.target.value})
            }}/>:null}
            <Input placeholder="email" type="email" label="Email" onChange={(e)=>{
                setFormData({...formData,email:e.target.value})
            }}/>
            <Input placeholder="********" type="password" label="Password"
            onChange={(e)=>{
                setFormData({...formData,password:e.target.value})
            }} />
            <ButtonFullWidth text={type=="signin"?"Sign In":"Sign Up"} onClick={onClickHandler}/>
        </div>
    </div>
}

export default Auth;


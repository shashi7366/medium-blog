import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Heading from "./Heading";
import ButtonFullWidth from "./ButtonFullWidth";

import {signup} from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";


interface formDataType {
    username: string,
    email: string,
    password: string
}

function Auth() {

    const [formData, setFormData] = useState<formDataType>({
        username: "",
        email: "",
        password: ""
    });

    const navigate=useNavigate();

    function onClickHandler(){
        fetch(signup,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email:formData.email,password:formData.password})
        }).then(res=>{
            return res.json();
        })
        .then(data=>{
            
            localStorage.setItem('medium-blog',`Bearer ${data.token}`);
            navigate("/blog/1");
        })
    }

    return <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] lg:w-[50%]">
            <Heading heading="Create an Account" />
            <div className="text-gray-400 text-lg font-normal w-full text-center">Already have an account?<Link to="/signin">Sign In</Link></div>
            <Input placeholder="" type="text" label="Username" onChange={(e)=>{
                setFormData({...formData,username:e.target.value})
            }}/>
            <Input placeholder="email" type="email" label="Email" onChange={(e)=>{
                setFormData({...formData,email:e.target.value})
            }}/>
            <Input placeholder="********" type="password" label="Password"
            onChange={(e)=>{
                setFormData({...formData,password:e.target.value})
            }} />
            <ButtonFullWidth text="Sign Up" onClick={onClickHandler}/>
        </div>
    </div>
}

export default Auth;


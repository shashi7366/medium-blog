import React from "react"
interface props{
    label:string,
    type?:string,
    placeholder:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>
}
function Input({label,type="text",placeholder,onChange}:props){

    return <div className="w-full m-4">
        <div className="w-full text-start text-xl font-semibold">{label}</div>
        <input 
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="py-2 px-2 border rounded-md w-full text-start"/>
    </div>
}

export default Input;
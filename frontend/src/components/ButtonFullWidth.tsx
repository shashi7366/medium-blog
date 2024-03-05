

function ButtonFullWidth({text,onClick}:{text:string,onClick:React.MouseEventHandler<HTMLButtonElement>}){

    return <button onClick={onClick} className="w-full border-none rounded-md py-2 text-center text-white font-semibold bg-slate-950">{text}</button>
}

export default ButtonFullWidth;
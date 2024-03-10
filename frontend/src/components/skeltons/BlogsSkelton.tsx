

function BlogsSkelton(){

    return <div role="status" className="max-w-[90%] animate-pulse w-[90%]">

        <div className="grid grid-cols-12 p-4">

            <div className="col-span-1 flex justify-end">
            <div className="min-w-8 w-8 max-h-8 border-none rounded-full bg-slate-300"></div>
            </div>

            <div className="col-span-11 flex flex-col justify-start">
            <div className="w-[90%] min-w-[90%] border-none rounded-full bg-slate-300 h-4"></div>
            <div className="w-[20%] border-none rounded-full bg-slate-300 h-2 my-2"></div>
            <div className="w-[90%] border-none rounded-md bg-slate-300 h-10 my-2 "></div>
            </div>
        </div>
    </div>
    
    
}

export default BlogsSkelton
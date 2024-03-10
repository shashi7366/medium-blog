

function ReadBlogSkelton(){

    return <div className="w-[90%] h-full min-w-[90%] animate-pulse flex justify-center m-auto">
        <div className="w-full grid grid-cols-12 gap-2">

            <div className="col-span-8 flex flex-col items-start">
                <div className="w-[70%] h-8 bg-gray-300 my-2 border-none rounded-full"></div>
                <div className="w-[30%] h-4 bg-gray-300 my-2 border-none rounded-full"></div>

                <div className="w-[90%] h-[60%] bg-gray-300 my-2 border-none rounded-md"></div>
            </div>

            <div className="col-span-3 bg-gray-300 h-[70%] min-h-[70%] my-2 border-none rounded-md"></div>

        </div>
    </div>
}

export default ReadBlogSkelton
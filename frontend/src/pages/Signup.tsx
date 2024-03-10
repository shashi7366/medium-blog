
import Auth from "../components/Auth";
import Quote from "../components/Quote";

function Signup(){
    return <div className="grid grid-cols-2 relative">
        <div className="col-span-2 lg:col-span-1">
            <Auth type=""/>
        </div>
        
        <div className="invisible lg:visible absolute z-0 lg:relative">
        <Quote/>
        </div>
        </div>;
}

export default Signup;
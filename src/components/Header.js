import {LOGO_URL} from "../../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () =>{

    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="flex justify-between bg-orange-300 shadow-lg sm:bg-yellow-400">
            <div className="logo-container">
                <img className="w-56 " src={LOGO_URL} alt="logo" />
            </div>
            <h1 className="font-bold text-6xl flex items-center">Abhay Food Plaza</h1>
            <div className="nav-items flex items-center">
                <ul className="flex justify-between p-4 m-8 ">
                    <li className="px-4">Online Staus : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contactus">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        if(btnNameReact==="Login")
                        {
                            setbtnNameReact("Logout")
                        }
                        else{
                            setbtnNameReact("Login")
                        }
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )

} 

export default Header;
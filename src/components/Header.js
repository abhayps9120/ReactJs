import {LOGO_URL} from "../../utils/constants";
import {useContext, useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus";
import {UserContext} from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    const cartItems =useSelector((store) => store.cart.items)
    console.log(cartItems)
    

    return (
        <div className="flex justify-between bg-orange-300 shadow-lg sm:bg-yellow-400">
            <div className="logo-container">
                <img className="w-56 " src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex justify-between p-4 m-8 ">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contactus">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart-{cartItems.length}items</Link></li>
                    <button className="login px-2" onClick={()=>{
                        btnNameReact==="Login"? setbtnNameReact("Logout"): setbtnNameReact("Login")
                        }}>{btnNameReact}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )

} 

export default Header;
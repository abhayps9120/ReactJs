import {LOGO_URL} from "../../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () =>{

    const onlineStatus = useOnlineStatus();

    const [btnNameReact, setbtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <h1>Abhay Food Plaza</h1>
            <div className="nav-items">
                <ul>
                    <li>Online Staus : {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contactus">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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
import { useState } from "react";

const User = ({name , location}) => {

    const[count , setcount] = useState(0);

    return <div className="user-card">
        <h1>Count = {count}</h1>
        <button onClick={()=>{
                setcount(count+1);
        }}>Change Kar De Bhai</button>
        <h2>User Name : {name}</h2>
        <h3>Location : {location}</h3>
    </div>
}

export default User;
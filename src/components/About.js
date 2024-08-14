import User from "./User";
import UserClass from "./UserClass";

const About =() => {
    return (
        <div className="aboutus">
            <h1>About Us</h1>
            <h3>This is the About Page</h3>
            <User name="Rupali (fun)" location="Alwar"/>
            <UserClass name ="Abhay(class)" location="Kanpur"/>
        </div>
    )  
}

export default About;
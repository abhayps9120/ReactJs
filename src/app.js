import React ,{lazy, Suspense, useEffect , useState} from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , Outlet ,RouterProvider } from "react-router-dom";


import Header from "./components/Header";
import Body from "./components/Body"
import About from "./components/About"
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { UserContext } from "../utils/UserContext";
import  {Provider} from "react-redux"
import { appStore } from "../utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import ("./components/Grocery"))



const AppLayout = () => {
    const [userName , setuserName]= useState([]);
    useEffect(()=>{
        const data = {name : "Abhay Pratap Singh"}
        setuserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName , setuserName }} >
            <div className ="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/> ,
        errorElement : <Error/>,
        children : [
            {
                path :"/",
                element : <Body/>
            } ,
            {
                path :"/grocery",
                element : <Suspense fallback={<h1>Sabra kar lo thoda yaar</h1>}><Grocery/></Suspense>
            },
            {
                path :"/cart",
                element : <Cart/>
            } ,
            {
                path :"/about",
                element : <About/>
            },
            {
                path : "/contactus",
                element : <Contactus/>
            },
            {
                path :"/restaurants/:resId",
                element : <RestaurantMenu/>
            }
        ]  
    }])
    

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
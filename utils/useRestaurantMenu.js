import { useState , useEffect } from "react";
import { ID_URL } from "../utils/constants";

const useRestaurantMenu = (resId) =>{
    const [resInfo , setresInfo]=useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(ID_URL+resId)
        const json = await data.json();
        setresInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;
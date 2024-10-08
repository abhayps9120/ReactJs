import {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams  } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestCategory from "./RestCategory"

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex,setShowIndex]= useState(null );

if(resInfo===null)
    {
        return <Shimmer/>
    }

const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center"> 
            <h1 className="font-extrabold my-10 text-2xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h2 className="text-4xl">Menu</h2>
            {categories.map((category , index)=><RestCategory data={category?.card?.card} showItem={index === showIndex ? true :false} setShowIndex={()=> setShowIndex(index)}/>)}
        </div>
    )
}

export default RestaurantMenu;
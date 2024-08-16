import { ItemList } from "./ItemList";
import {useState} from "react";

const RestCategory = ({ data }) => {
    const handleClick = () => {
        const [showItem , setShowItem] = useState(false);
    }
  return (
    <div className="text-center m-2">
      <div className=" bg-slate-100 mx-auto my-4 w-6/12 shadow-lg cursor-pointer">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="text-xl">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestCategory;

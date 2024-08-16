import { CDN_URL } from "../../utils/constants"

export const ItemList = ({items}) => {
    console.log(items)
    return (<div>
       {items.map((item)=> (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex  justify-between">
            <div className="w-9/12">
                <div className="py-2">
                    <span className="text-bold py-2">{item.card.info.name}-</span>
                    <span >₹{item.card.info.price/100 || item.card.info.defaultPrice/100 } </span>
                    
                </div>
                <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <button className="p-2 bg-white mx-7 rounded-sm absolute ">Add+</button>
                <img src={CDN_URL+item.card.info.imageId} className="w-full"></img>
            </div>
        </div>
       )
       )}
    </div>
)
} 
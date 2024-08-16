import {CDN_URL} from "../../utils/constants";


const Rest = (props) => {
    const {resData} = props;
    return(
        <div className="m-4 p-4 w-[200px] bg-white rounded-lg hover:border border-black border-solid">
            <img className="res-logo rounded-lg" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h3 className="font-semibold py-4 text-xl">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{"Rating"+resData.info.avgRating}</h4>
            <h4>{"Delivery Time :"+resData.info.sla.deliveryTime}</h4>
        </div>
        
    )
}
//Higher Order Component

export const withPromotedLabel = (Rest) =>{
    return(props) => {
        return (
            <div>
                <label className="absolute m-2 p-1 rounded-lg bg-black text-white">Open</label>
                <Rest {...props}/>
            </div>
        )
    }
}

export default Rest; 
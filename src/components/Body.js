import Rest , {withPromotedLabel} from "./Rest";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { UserContext } from "../../utils/UserContext";

const Body = () => {
  const [listofrest, setlistofrest] = useState([]);
  const [filteredRest, setfilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofrest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const [searchText, setsearchText] = useState([]);

  const RestPromoted = withPromotedLabel(Rest);

  const {loggedInUser , setuserName} = useContext(UserContext);

  if (filteredRest.length === 0) {
    return <Shimmer />;
  }
  return onlineStatus === false ? (
    <h1>Internet connection is lost</h1>
  ) : (
    <div className="body bg-yellow-100">
      <div className="flex items-center">
        <div className="Search">
        <input
          type="text"
          className="border border-solid border-black rounded-lg"
          placeholder="Search Restaurant Here !"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button className="px-4 bg-green-100 m-4 rounded-sm"
          onClick={() => {
            const filter = listofrest.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRest(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn px-4 bg-yellow-200 m-4 border border-solid border-black rounded-sm"
          onClick={() => {
            const filter = listofrest.filter((res) => res.info.avgRating > 4.5);
            setfilteredRest(filter);
          }}
        >
          Top Rated Restauants.
        </button>
      </div>
      <div>
      <label>Update User Name :</label>
      <input className="border border-black m-1" value={loggedInUser}  onChange={(e) => setuserName(e.target.value)}/>
      </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestPromoted resData={restaurant}/>
            ):(
              <Rest resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

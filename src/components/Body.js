import Rest from "./Rest";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
    console.log(json);
    setlistofrest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRest(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const [searchText, setsearchText] = useState([]);

  if (filteredRest.length === 0) {
    return <Shimmer />;
  }
  return onlineStatus === false ? (
    <h1>Internet connection is lost</h1>
  ) : (
    <div className="body">
      <div className="Search">
        <input
          type="text"
          placeholder="Search Here !"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
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
          className="filter-btn"
          onClick={() => {
            const filter = listofrest.filter((res) => res.info.avgRating > 4.5);
            setfilteredRest(filter);
          }}
        >
          Top Rated Restauants.
        </button>
      </div>
      <div className="res-cont">
        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <Rest resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

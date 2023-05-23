import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { useState } from "react";
import RestCardSkeleton from "./Skeleton/RestCardSkeleton";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import { RESTAURANT_LIST_URL } from "../constants";
import useOnline from "./utils/useOnline";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantList();
  }, []);

  function getList(data) {
    const list = data?.data?.cards.map((item) => {
      return item?.data?.data;
    });
    return list;
  }

  const isOnline = useOnline();
  if(!isOnline){
    return(
      
        <h1>Oops!! Please check your internet connection</h1>
        
    )
  }

  async function getRestaurantList() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const resData = await data.json();
    const resList = getList(resData);
    console.log(resList);
    setRestaurantList(resList);
    setFilteredRestaurant(resList);
  }

 

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          className="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="container">
        {
          (restaurantList.length === 0)?
          ([1, 2, 3, 4, 5, 6].map((item,index) => <RestCardSkeleton key={index}/>)):
          (filteredRestaurant.length === 0)?(<h1>No match found</h1>):
          filteredRestaurant.map((item) => {
            return <Link key={item.id} to={"/restaurant/"+item?.id}>
                      < RestaurantCard  restaurant={item} />
                    </Link>;
          })

        }
        
      </div>
    </>
  );
};
export default Body;

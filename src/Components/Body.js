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
      <div className="lg:mx-28 px-2 my-4">
        <input
          type="text"
          placeholder="search"
          className=" border-2 border-slate-500 rounded-md py-1 px-2 mx-2 focus:outline-yellow-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className=" border-2 border-slate-500 rounded-md py-1 px-2 mx-2 bg-yellow-300"
          onClick={() => {
            const data = filterData(searchText, restaurantList);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className=
      "mx-auto lg:mx-28 my-10 grid lg:grid-cols-4 md:grid-cols-3 gap-3 justify-center">
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

import RestaurantCard from "./RestaurantCard";
import React, { useEffect } from "react";
import { useState } from "react";

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

  async function getRestaurantList() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.366893297739587&lng=85.33701281994581&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const resData = await data.json();
    const resList = getList(resData);
    console.log(resList);
    setRestaurantList(resList);
    setFilteredRestaurant(resList);
  }

  function filterData(searchText, resList) {
    const data = resList.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
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
      {filteredRestaurant.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <div className="container">
          {filteredRestaurant.map((item) => {
            return <RestaurantCard key={item.id} restaurant={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default Body;

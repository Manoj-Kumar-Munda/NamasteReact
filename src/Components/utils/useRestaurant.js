import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3677627&lng=85.3402931&restaurantId=" +
        `${resId}` +
        "&submitAction=ENTER"
    );
    const json = await data.json();
    const info = getInfo(json);
    const menu = getMenu(json);
   
    setRestaurantMenu(menu);
    setRestaurantInfo(info);
  }

  function getMenu(json) {
    const data =
      json.data.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.slice(1)[0]
        ?.card?.card?.itemCards;
    return data;
  }

  function getInfo(json) {
    const data = json?.data?.cards[0]?.card?.card?.info;
    return data;
  }


  return [ restaurantInfo ,restaurantMenu];

};

export default useRestaurant;

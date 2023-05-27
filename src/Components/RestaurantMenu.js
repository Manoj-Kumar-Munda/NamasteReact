
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Skeleton/Shimmer";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  
  const { id } = useParams();

  const [restaurantInfo, restaurantMenu] = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    
    <div className="grid grid-cols-2">
      <div className="resInfo">
        <h1>Restaurant id : {restaurantInfo.id}</h1>
        <h2>{restaurantInfo.name}</h2>
        <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} />
        <h2>{restaurantInfo.city}</h2>
        <h2>
          {restaurantInfo.areaName} , {restaurantInfo.locality}
        </h2>
      </div>
     
      <div className="menu">
        <ul>
          {restaurantMenu.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            restaurantMenu.map((item) => {
              return (
                <li className="my-2" key={item?.card?.info?.id}>
                  
                  {item?.card?.info?.name} -  <button className="p-1 bg-green-300" onClick={() => addFoodItem(item?.card?.info)}>Add item</button>
      
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>

      )
    }
    
export default RestaurantMenu;

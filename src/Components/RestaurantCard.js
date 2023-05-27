import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    return (
      <div className="max-w-sm p-2 border-2 rounded-lg border-slate-100 hover:transition">
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
        <h2>{restaurant?.name}</h2>
        <p className="truncate">{restaurant?.cuisines?.join(',')}</p>
        <p>{restaurant?.avgRating}</p>
      </div>
    );
  };

  export default RestaurantCard;
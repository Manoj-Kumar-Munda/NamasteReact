import { IMG_CDN_URL } from "../constants.js";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    return (
      <div className="card">
        <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.cuisines.join(',')}</h3>
        <h4>{restaurant.avgRating}</h4>
      </div>
    );
  };

  export default RestaurantCard;
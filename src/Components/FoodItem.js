import { IMG_CDN_URL } from "../constants";


const FoodItem = ({name,price,imageId}) => {
    return(
        <div>
            <img className="h-28 rounded-lg" src={IMG_CDN_URL+imageId}/>
            <h2>{name}</h2>
            <h2>Rs. {price / 100}</h2>
        </div>
    )

}

export default FoodItem;
import Shimmer from "./Shimmer";
import './skeleton.css';

const RestCardSkeleton = () => {
    return(
        <div className="wrapper">
            <Shimmer type="thumbnail"/>
            <Shimmer type="title"/>
            <Shimmer type="text"/>
            <Shimmer type="rating" />
            <Shimmer type="eta" />

        </div>
       
    );

}

export default RestCardSkeleton;
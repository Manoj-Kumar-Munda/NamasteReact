import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import FoodItem from "./FoodItem";
import {clearCart} from "./utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    const cartItems = useSelector( (store) => store.cart.items );
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button 
                className="bg-green-100 px-4 py-1 m-5"
                onClick={() => handleClearCart()}
            >
                Clear

            </button>
            <div className="">
            {
                cartItems.map( (item) => <FoodItem key= {item.id} {...item} />)
            }
            </div>
        </div>
    )
}
export default Cart;
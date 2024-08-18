import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center font-semibold m-2  p-2 ">
            <h1 className="m-4 text-3xl">Cart</h1>
            <button onClick={ handleClearCart }className="border m-2 border-black bg-black text-white">Clear Cart</button>
            {cartItems.length===0 && <h1>Cart is Empty.Add Item to Cart </h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
          
        </div>
}
export default Cart;
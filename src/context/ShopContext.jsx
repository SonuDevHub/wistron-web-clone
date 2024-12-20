import { createContext, useState } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const addToCart = async (itemId) => {
        let cardData = structuredClone(cartItems);
    }
    const value = {
        products, currency, delivery_fee,
        search, setSearch, setShowSearch, showSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductData from "./api";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [genre,setGenre] = useState("")
    const [productData,setProductData] = useState(ProductData);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // useEffect(() => {
    //     let count = 0;
    //     cartItems?.map((item) => (count += item.attributes.quantity));
    //     setCartCount(count);

    //     let subTotal = 0;
    //     cartItems.map(
    //         (item) =>
    //             (subTotal += item.attributes.price * item.attributes.quantity)
    //     );
    //     setCartSubTotal(subTotal);
    // }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        const obj = {quantity:quantity}
        product = {...product,...obj}
        let items = [...cartItems];
        console.log(items)
        // let index = items?.findIndex((p) => p.id === product?.id);
        let preId = items.includes(product)
        console.log(preId)

        if (preId) {
            // items[index].attributes.quantity += quantity;
            // quantity += 1
        } else {
            // product.attributes.quantity = quantity;

            items = [...items, product];
            // console.log(items)
        
        }
            console.log(product)
        setCartItems(items);
        console.log(cartItems)
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => p.id !== product?.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                genre,
                setGenre,
                productData,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;

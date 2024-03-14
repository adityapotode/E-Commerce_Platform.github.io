// import React, { useContext } from "react";
// import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = ({item}) => {
    const {productData,CartItem,handleRemoveFromCart} = useContext(Context)
   
    // const data = productData.filter(item => item.id === CartItem.id)
    // const product = data[0]
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="image-container">
                    <img src={item.cover} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">{item.title}</span>
                    <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
                    <div className="quantity-buttons">
                    &#8377;{item.price}({item.quantity})
                    </div>
                    <div className="text">
                        <span>Total Product Price:
                        (&#8377;{item.price*item.quantity})
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

// const CartItem = () => {
//     const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
//         useContext(Context);

//     return (
//         <div className="cart-products">
//             {cartItems?.map((item) => (
//                 <div
//                     className="search-result-item"
//                     key={item.id}
//                     onClick={() => {}}
//                 >
//                     <div className="image-container">
//                         <img
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 item.attributes.image.data[0].attributes.url
//                             }
//                         />
//                     </div>
//                     <div className="prod-details">
//                         <span className="name">{item.attributes.title}</span>
//                         <MdClose
//                             className="close-btn"
//                             onClick={() => handleRemoveFromCart(item)}
//                         />
//                         <div className="quantity-buttons">
//                             <span
//                                 onClick={() =>
//                                     handleCartProductQuantity("dec", item)
//                                 }
//                             >
//                                 -
//                             </span>
//                             <span>{item.attributes.quantity}</span>
//                             <span
//                                 onClick={() =>
//                                     handleCartProductQuantity("inc", item)
//                                 }
//                             >
//                                 +
//                             </span>
//                         </div>
//                         <div className="text">
//                             <span>{item.attributes.quantity}</span>
//                             <span>x</span>
//                             <span className="highlight">
//                                 <span>&#8377;</span>
//                                 {item.attributes.price *
//                                     item.attributes.quantity}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

export default CartItem;

// import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

// import { Context } from "../../utils/context";
// import CartItem from "./CartItem/CartItem";
// import { loadStripe } from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";

import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
    const navigate = useNavigate()
    const { cartItems } = useContext(Context)
    const arr = cartItems.map((item) => {

        const price = item.price;
        const quantity = item.quantity;
        const total = price * quantity
        return total

    })
    const subTotal = arr.length?arr.reduce((acc, val) => acc += val):0
    console.log(subTotal)


    console.log(cartItems)
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>

                {/* <div className="empty-cart">
                    <BsCartX />
                    <span>No Products in the cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div> */}

                <>
                    {subTotal?
                        cartItems.map(item => {
                            return (
                                <>
                                    <CartItem item={item} />
                                </>
                            )
                        }):
                        (
                            <div style={{display:"flex",justifyContent:"center",marginTop:"300px",color:"lightgrey"}}>
                                <h1>Empty Cart</h1>
                            </div>
                        )
                    }

                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal:</span>
                            <span className="text total">&#8377;{subTotal}</span>
                        </div>
                        <div className="button">
                            <button className="checkout-cta" onClick={()=>{
                                
                                setShowCart(false)
                                navigate("/checkout");
                                
                                }}>Checkout</button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

// const Cart = () => {
//     const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

//     const stripePromise = loadStripe(
//         process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
//     );

//     const handlePayment = async () => {
//         try {
//             const stripe = await stripePromise;
//             const res = await makePaymentRequest.post("/api/orders", {
//                 products: cartItems,
//             });
//             await stripe.redirectToCheckout({
//                 sessionId: res.data.stripeSession.id,
//             });
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="cart-panel">
//             <div
//                 className="opac-layer"
//                 onClick={() => setShowCart(false)}
//             ></div>
//             <div className="cart-content">
//                 <div className="cart-header">
//                     <span className="heading">Shopping Cart</span>
//                     <span
//                         className="close-btn"
//                         onClick={() => setShowCart(false)}
//                     >
//                         <MdClose className="close-btn" />
//                         <span className="text">close</span>
//                     </span>
//                 </div>

//                 {!cartItems.length && (
//                     <div className="empty-cart">
//                         <BsCartX />
//                         <span>No products in the cart.</span>
//                         <button className="return-cta" onClick={() => {}}>
//                             RETURN TO SHOP
//                         </button>
//                     </div>
//                 )}

//                 {!!cartItems.length && (
//                     <>
//                         <CartItem />
//                         <div className="cart-footer">
//                             <div className="subtotal">
//                                 <span className="text">Subtotal:</span>
//                                 <span className="text total">
//                                     &#8377;{cartSubTotal}
//                                 </span>
//                             </div>
//                             <div className="button">
//                                 <button
//                                     className="checkout-cta"
//                                     onClick={handlePayment}
//                                 >
//                                     Checkout
//                                 </button>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

export default Cart;

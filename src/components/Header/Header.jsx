import { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
// import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";

import Search from "./Search/Search";
// import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import Category from "../Category/Category";
import { Context } from "../../utils/context";

// const Header = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [searchModal, setSearchModal] = useState(false);
//     const navigate = useNavigate();
//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > 200) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//     }, []);

//     const { cartCount, showCart, setShowCart } = useContext(Context);

//     return (
//         <>
//             <header
//                 className={`main-header ${scrolled ? "sticky-header" : ""}`}
//             >
//                 <div className="header-content">
//                     <ul className="left">
//                         <li onClick={() => navigate("/")}>Home</li>
//                         <li onClick={() => navigate("/about")}>About</li>
//                         <li>Categories</li>
//                     </ul>
//                     <div className="center" onClick={() => navigate("/")}>
//                         JSDEVSTORE.
//                     </div>
//                     <div className="right">
//                         <TbSearch onClick={() => setSearchModal(true)} />
//                         <AiOutlineHeart />
//                         <span
//                             className="cart-icon"
//                             onClick={() => setShowCart(true)}
//                         >
//                             <CgShoppingCart />
//                             {!!cartCount && <span>{cartCount}</span>}
//                         </span>
//                     </div>
//                 </div>
//             </header>
//             {searchModal && <Search setSearchModal={setSearchModal} />}
//             {showCart && <Cart />}
//         </>
//     );
// };

const Header = () => {
    const {cartItems} = useContext(Context)
    const {genre,setGenre} = useContext(Context)
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate()

    const handleScroll = () => {
        const offset = window.scrollY;
        // console.log(offset)
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }


    };
    const navigateHandler = () => {
        setGenre("")
        navigate("/")
    }

    const Category = () => {
        setGenre("")
        navigate("/categories")
    }

    const About = () => {
        navigate("/about")
    }

   

    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={navigateHandler}>Home</li>
                        <li onClick={About}>About</li>
                        <li onClick={Category}>Categories</li>
                    </ul>
                    <div className="center">Gadgets Platform</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        {/* <AiOutlineHeart /> */}
                        <span
                            className="cart-icon"
                            onClick={()=>setShowCart(true)}>
                            <CgShoppingCart />
                            <span>{cartItems.length}</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}

        </>
    );

};

export default Header;

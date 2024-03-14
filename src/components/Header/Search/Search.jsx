// import React, { useState } from "react";
// import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";

import { MdClose } from "react-icons/md";
import "./Search.scss";

import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useContext, useState } from "react";
import { Context } from "../../../utils/context";

const Search = ({ setShowSearch }) => {
    const { productData } = useContext(Context)
    console.log(productData)
    const [search, setSeach] = useState("")

    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"

                placeholder="Search for Products"
                value={search}
                onChange={(e) => setSeach(e.target.value)}
            />
            <MdClose onClick={() => setShowSearch(false)} />
        </div>
        {
            productData.filter((item) => {
                if (search === "") {
                    return item;
                }
                else if (item.genre.toLowerCase().includes(search.toLowerCase())) {
                    return item;
                }
            }).map((item) => {
                return (
                    <>

                        <div className="" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                            <div className="" style={{ border: "1px solid black", width: "40%" }}>
                                <div className="" style={{ display:"flex", alignItems:"center"  }}>
                                    <div className="">
                                        <img src={item.cover} alt="" style={{ width: "150px" }} />
                                    </div>

                                    <div className="" style={{}}>
                                        <div className="genre">Product Genre: {item.genre}</div>
                                        <div className="name">Product Name: {item.title}</div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )
            })


        }

    </div>
};



{/* <div className="search-result-content" >
    <div className="search-results">
        <div className="search-result-item">
            <div className="image-container">
                <img src={prod} alt="" />
            </div>

            <div className="prod-details">
                <span className="name">Product Name: </span>
                <span className="desc">Product Description:</span>
            </div>

        </div>
    </div>
</div> */}

// const Search = ({ setSearchModal }) => {
//     const [query, setQuery] = useState("");
//     const navigate = useNavigate();

//     const onChange = (e) => {
//         setQuery(e.target.value);
//     };

//     let { data } = useFetch(
//         `/api/products?populate=*&filters[title][$contains]=${query}`
//     );

//     if (!query.length) {
//         data = null;
//     }

//     return (
//         <div className="search-modal">
//             <div className="form-field">
//                 <input
//                     autoFocus
//                     type="text"
//                     placeholder="Search for products"
//                     value={query}
//                     onChange={onChange}
//                 />
//                 <MdClose
//                     className="close-btn"
//                     onClick={() => setSearchModal(false)}
//                 />
//             </div>
//             <div className="search-result-content">
//                 {!data?.data?.length && (
//                     <div className="start-msg">
//                         Start typing to see products you are looking for.
//                     </div>
//                 )}
//                 <div className="search-results">
//                     {data?.data?.map((item) => (
//                         <div
//                             className="search-result-item"
//                             key={item.id}
//                             onClick={() => {
//                                 navigate("/product/" + item.id);
//                                 setSearchModal(false);
//                             }}
//                         >
//                             <div className="image-container">
//                                 <img
//                                     src={
//                                         process.env
//                                             .REACT_APP_STRIPE_APP_DEV_URL +
//                                         item.attributes.image.data[0].attributes
//                                             .url
//                                     }
//                                 />
//                             </div>
//                             <div className="prod-details">
//                                 <span className="name">
//                                     {item.attributes.title}
//                                 </span>
//                                 <span className="desc">
//                                     {item.attributes.description}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };


export default Search;

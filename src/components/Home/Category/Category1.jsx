// import { useNavigate } from "react-router-dom";
import "./Category1.scss";

import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const Category1 = () => {
    const {genre,setGenre} = useContext(Context)
    
    return (

        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt="" onClick={()=>setGenre("Headphones")}/>
                </div>
                <div className="category">
                    <img src={cat2} alt="" onClick={()=>setGenre("Speakers")}/>
                </div>
                <div className="category">
                    <img src={cat3} alt="" onClick={()=>setGenre("Watch")}/>
                </div>
                <div className="category">
                    <img src={cat4} alt="" onClick={()=>setGenre("Earbuds")}/>
                </div>

            </div>
        </div>


    )
};



// const Category = ({ categories }) => {
//     const navigate = useNavigate();
//     return (
//         <div className="shop-by-category">
//             <div className="categories">
//                 {categories?.data?.map((item) => (
//                     <div
//                         key={item.id}
//                         className="category"
//                         onClick={() => navigate(`/category/${item.id}`)}
//                     >
//                         <img
//                             src={
//                                 process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                                 item.attributes.img.data.attributes.url
//                             }
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

export default Category1;

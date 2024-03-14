// import React from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Product.scss";


const Product = ({cover,title,price,desc,id}) =>{
    const navigate = useNavigate()
    const productDetail = (id)=>{
        console.log("detailPage")
        navigate(`/categories/${id}`)
    }
    return <div onClick={()=>productDetail(id)} className="product-card">
        <div className="thumbnail">
            <img src={cover} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">{title}</span>
            <span className="price">&#8377;{price}</span>
            <span className="desc">{desc}</span>
        </div>
    </div>
}


// const Product = ({ data, id }) => {
//     const navigate = useNavigate();
//     return (
//         <div
//             className="product-card"
//             onClick={() => navigate("/product/" + id)}
//         >
//             <div className="thumbnail">
//                 <img
//                     src={
//                         process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                         data.image.data[0].attributes.url
//                     }
//                 />
//             </div>
//             <div className="prod-details">
//                 <span className="name">{data.title}</span>
//                 <span className="price">&#8377;{data.price}</span>
//             </div>
//         </div>
//     );
// };

export default Product;

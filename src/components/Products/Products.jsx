// import "./Products.scss";
import { Context } from "../../utils/context";
import Product from "./Product/Product";
import "./Products.scss";
import { useContext } from "react";





// const Products = ({ innerpage, headingText }) => {
//     return (
//         <div className="products-container">
//             {!innerpage && <div className="sec-heading">{headingText}</div>}
//             <div className="products">
//                 <Product />
//                 <Product />
//                 <Product />
//                 <Product />
//                 <Product />
//                 <Product />
//                 <Product />
//                 <Product />
//             </div>
//         </div>
//     )
// }

const Products = ({ innerpage, headingText }) => {
    const {productData,genre} = useContext(Context)

    
    // console.log(productData)
    
    const arr = productData.filter(item=>item.genre === genre)
   
        return (
            <div className="products-container">
                {!innerpage && <div className="sec-heading">{headingText}</div>}
                <div className="products">  
                    {
                        (arr.length?arr:productData).map((item)=>{
                           
                            return(
                                <>
                                <Product key={item.id} cover={item.cover} title={item.title} price={item.price} id={item.id} />
                                </>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        )
    }

// const ProductData = ({ products, innerPage, headingText }) => {
//     return (
//         <div className="products-container">
//             {!innerPage && <div className="sec-heading">{headingText}</div>}
//             <div className={`products ${innerPage ? "innerPage" : ""}`}>
//                 {products?.data?.map((item) => (
//                     <Product
//                         key={item.id}
//                         id={item.id}
//                         data={item.attributes}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };


// const Products = () => {
//     return (
//         <>


//             {
//                 ProductData.map((cval) => {
//                     return (
//                         <>
//                             <div className="product-card">
//                                 <div className="thumbnail">
//                                     <img src={cval.cover} alt="" />
//                                 </div>
//                                 <div className="prod-details">
//                                     <span className="name">{cval.title}</span>
//                                     <span className="price">₹ {cval.price}</span>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })
//             }

//         </>
//     )
// }

export default Products;

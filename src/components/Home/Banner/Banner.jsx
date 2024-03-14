import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Smart</h1>
                    <p>The Perfect time to show your Love Upto 70% off 
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={()=>navigate("/about")}>Read More</div>
                        <div className="banner-cta v2" onClick={()=>navigate("/categories")}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;

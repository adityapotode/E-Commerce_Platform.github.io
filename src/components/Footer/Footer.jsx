import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        At Gadget Platform, our mission is to provide tech enthusiasts, professionals, and everyday consumers with a seamless and enjoyable shopping experience for a wide range of electronic gadgets. We aim to be the go-to platform for discovering, comparing, and acquiring the latest and most cutting-edge devices in the market.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Nagpur, Maharashtra, India - 441305
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9834902350</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: gadgetsplatform@info.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Wireless Earbuds</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">    
                <div className="bottom-bar-content">
                    <span className="text">
                        Gadgets Platform @2024 DESIGNED BY ADITYA POTODE
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;

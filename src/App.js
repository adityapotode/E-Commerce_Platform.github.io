import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import Search from "./components/Header/Search/Search";
import Modal from "./components/Cart/modal/Modals";
import Modals from "./components/Cart/modal/Modals";


function App() {
   
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/:id" element={<SingleProduct />} />
                    <Route path="/checkout" element={<Modals/>} />
                </Routes>
                <Newsletter />
                <Footer path="/footer/:id" element={<Footer/>} />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;

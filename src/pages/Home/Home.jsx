import React from 'react'
import Category1 from '../../components/Home/Category/Category1'
import Products from '../../components/Products/Products'
import Banner from '../../components/Home/Banner/Banner'
import "./Home.scss"

const Home = () => {
  return (
    <div >
            <Banner />
            <div className=" main-content">
                <div className=" layout">
                    <Category1 />
                    <Products  headingText="Popular Products"/>
                </div>

            </div>          
        </div>
  )
}

export default Home
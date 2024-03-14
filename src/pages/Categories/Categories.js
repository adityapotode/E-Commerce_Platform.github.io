import React from 'react'
import Category1 from '../../components/Home/Category/Category1'
import Products from '../../components/Products/Products'

const Categories = () => {
  return (
    <>
    <div className=" main-content">
                <div className=" layout">
                    <Category1 />
                    <Products headingText="Popular Products"/>
                </div>

            </div>          
    </>
  )
}

export default Categories
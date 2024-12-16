import React from 'react'
import ProductList from '../Components/ProductList'
import Cart from '../Components/Cart'

function Home() {
  return (
    <>
        <h2>Eshop</h2>
        <ProductList/>
        <Cart />
    </>
  )
}

export default Home
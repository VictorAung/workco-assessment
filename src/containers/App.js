import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Header from './Header'

const App = () => (
  <div className="mainContainer">
    <Header />
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App

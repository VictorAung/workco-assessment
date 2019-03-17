import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className = "productContent">
    <div className="flexbox">
      <p className="productName">{title}</p>
      <p className="productPrice">${price}</p>
    </div>
    <p className="productInventory">{inventory > 0 ? `${inventory} Remaining` : 'Out of Stock'}</p>
    {children}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product

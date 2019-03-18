import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, children }) => (
  <div className="productContent">
    <div className="imageWrapper">
      <img src={`./assets/${title}.png`} alt={title} />
    </div>
    <div className="infoWrapper">
      <div className="productDescription">
        <div className= "productName">{title}</div>
        <div className="productPrice">${price}</div>
      </div>

      <div className="productInventory">
        {inventory ? `${inventory} Remaining` : null}
      </div>
      {children}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Product

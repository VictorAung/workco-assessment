import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked, closeModal, addToCart, subtractFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>

      <div className="cartFullProduct" key={product.id}>
        <div className= "cartProduct">
        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}>
        </Product>
        </div>
        <div className="cartButtonDiv">
          <button
            className="secondaryBtn minus"
            onClick={() => subtractFromCart(product.id)}
            disabled={product.quantity === 1}>
          </button>
          <label>
            <input value={product.quantity}/>
          </label>

          <button
            className= "secondaryBtn plus"
            onClick={() => addToCart(product.id)}
            disabled={product.inventory === 0}>
          </button>

        </div>
      </div>
    )
  ) : (
    <div className="emptyCart">
      <img className="cartIcon2" src="./assets/Cart.svg" alt="cart-icon" />
      <span>Please add some products<br/>to your cart.</span>
    </div>
  )

  return (
    <div className="cartComponent">
      <div className="closeModal" onClick={closeModal}>
      </div>

      <div className="cartTitle">Your cart</div>
      <div className="cartDiv">
        <div className="cartProducts">{nodes}</div>
        <div className="cartCheckout">
          {hasProducts && (
            <div className="cartSummary">
              <span className="text">Total:</span>
              <span className="price">${total}</span>
            </div>
            )}
          {hasProducts && (
            <div className="checkoutBtn" onClick={onCheckoutClicked}>
              <span className="checkoutTxt">Checkout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart

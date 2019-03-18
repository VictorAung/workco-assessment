import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import { openModal } from '../actions'

const Header = ({ products, openModal}) => (
  <div className="header">
   <div className="shopTitle">
    <h1>Acme Store</h1>
    </div>
      <a className="cartLink" href="#" >
        <div className="cartLinkContainer">
          <img src="./assets/Cart.svg" className="cartImg" alt="cart-icon" />
              {products.length ? 'View Cart': 'Your cart is empty'}

        </div>
      </a>
  </div>
)

const mapStateToProps = state => ({
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps,
  {openModal}
)(Header)

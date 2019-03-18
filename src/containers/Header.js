import React from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../reducers'
import { openModal } from '../actions'

const Header = ({ products, openModal}) => (
  <div className="header">
    <h1>Acme Store</h1>

  </div>
)

const mapStateToProps = state => ({
  products: getCartProducts(state),
})

export default connect(
  mapStateToProps,
  {openModal}
)(Header)

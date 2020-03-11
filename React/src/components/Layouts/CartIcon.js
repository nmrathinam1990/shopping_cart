import React from "react";
import { connect } from "react-redux";

class CartIcon extends React.Component {
  render() {
    const count = {display:''};
    if (this.props.cartCount !== 0) {
       count.display = <span>{this.props.cartCount}</span>;
    }
    return (
      <i className="fa fa-shopping-cart fa-lg batch" aria-hidden="true">{count.display}</i>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartCount: state.cart.cart.length
  };
}

export default connect(
  mapStateToProps,
  null
)(CartIcon);

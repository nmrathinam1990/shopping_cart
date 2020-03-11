import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromAddToCart,
  decreaseQuantity,
  increaseQuantity
} from "../../redux/actions";
import PriceDetails from "./PriceDetails";

class Cart extends React.Component {
  removeCartItem(id) {
    this.props.removeItemFromAddToCart(id);
  }

  increment(id) {
    this.props.increaseQuantity(id);
  }

  decrement(id) {
    this.props.decreaseQuantity(id);
  }

  render() {
    const cartDetails = this.props.cartDetails;
    if (cartDetails.length === 0) {
      return (
        <h2 style={{ padding: "20px", textAlign: "center" }}>
          Cart is Empty!...
        </h2>
      );
    }
    return (
      <section>
        <article>
          <div className="cart-items">
            {cartDetails.map(item => (
              <div className="cart-item" key={item.id}>
                <p className="cart-image">
                  <img src={item.img_url} alt="" />
                </p>
                <div className="cart-details">
                  <p>{item.name}</p>
                  <div className="cart-price">
                    <p className="offer">
                      <span className="c-price">
                        ₹
                        {Math.floor(
                          (item.price - (item.discount / 100) * item.price)*item.quantity
                        )}
                      </span>
                      <span className="c-strike">{item.price}</span>
                      <span className="c-percentage">{item.discount}% off</span>
                    </p>
                    <p className="quantity">
                      <button
                        className="decrement"
                        onClick={() => this.decrement(item.id)}
                      >
                        -
                      </button>
                      <span className="count"> {item.quantity} </span>
                      <button
                        className="increment"
                        onClick={() => this.increment(item.id)}
                      >
                        +
                      </button>
                    </p>
                    <p
                      className="cart-remove-button"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.removeCartItem(item.id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
        <PriceDetails />
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    cartDetails: state.cart.cart
  };
}

const mapDispatchToProps = {
  removeItemFromAddToCart,
  decreaseQuantity,
  increaseQuantity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

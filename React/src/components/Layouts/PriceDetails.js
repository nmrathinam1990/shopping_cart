import React from "react";
import { connect } from "react-redux";

class PriceDetails extends React.Component {
  state = {
    total: null,
    discount: null
  };

  render() {
    let priceDetails = this.props.cartDetails;
    let totalPrice = priceDetails.map(val => val.price * val.quantity);
    let totalDiscount = priceDetails.map(val => (val.discount / 100) * val.price * val.quantity);

    let total = {
      totalPrice: totalPrice.reduce((a,b) => a+b,0),
      totalDiscount: totalDiscount.reduce((a,b) => a+b,0)
    };

    return (
      <aside className="cart">
        <div className="p-details">
          <p>Price Details</p>
          {priceDetails.map(val => (
            <div className="p-breakup" key={val.id}>
              <p>
                Price ({val.name}) : <span>₹{val.price * val.quantity}</span>
              </p>
              <p>
                Discount :
                <span>₹{(val.discount / 100) * val.price * val.quantity}</span>
              </p>
            </div>
          ))}

          <p className="total-amt">
            Total Payable <span>₹{total.totalPrice - total.totalDiscount}</span>
          </p>
        </div>
      </aside>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartDetails: state.cart.cart
  };
}

export default connect(
  mapStateToProps,
  null
)(PriceDetails);

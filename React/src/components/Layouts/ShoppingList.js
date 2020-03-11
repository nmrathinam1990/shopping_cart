import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

class ShoppingList extends React.Component {
  addToShoppingCart = id => {
    id.quantity = 1;
    this.props.addToCart(id);
  };

  render() {
    const list = { items: this.props.shoppingList };
    const sortBy = this.props.sort;
    const cart = this.props.shoppingCart.cart.map(val => val.id);
    const filter = this.props.filter;

    if (Object.keys(filter).length !== 0) {
      list.items = list.items.filter(
        val => val.price >= filter.start && val.price <= filter.stop
      );
    }

    if (sortBy.sort === "lowToHigh") {
      list.items.sort((a, b) => {
        return (a.price - (a.discount / 100) * a.price) - (b.price - (b.discount / 100) * b.price);
      });
    } else if (sortBy.sort === "highToLow") {
      list.items.sort((a, b) => {
       return (b.price - (b.discount / 100) * b.price) - (a.price - (a.discount / 100) * a.price);
      });
    } else if (sortBy.sort === "discount") {
      list.items.sort((a, b) => {
        return a.discount - b.discount;
      });
    }

    return (
      <div className="items">
        <div className="item m-filter">
          <p>
            <i className="fa fa-sort fa-lg" aria-hidden="true"></i> Sort
          </p>
        </div>

        <div className="item m-short-by">
          <p>
            <i className="fa fa-filter fa-lg" aria-hidden="true"></i> Filter
          </p>
        </div>

        {list.items.map(item => (
          <div className="item" key={item.id}>
            <img src={item.img_url} alt="" />
            <p>{item.name}</p>
            <p>
              <span className="price">
                ₹{Math.floor(item.price - (item.discount / 100) * item.price)}
              </span>
              <span className="strike">{item.price}</span>
              <span className="percentage">{item.discount}% off</span>
            </p>
            <div className="btn">
              <button
                className="cart-button"
                onClick={() => this.addToShoppingCart(item)}
                style={cart.indexOf(item.id) !== -1 ? { color: "#8C8C8C" } : {}}
                disabled={cart.indexOf(item.id) !== -1 ? true : false}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppingList: state.shoppingList.entity ? state.shoppingList.entity : [],
    sort: state.sortShoppingList,
    shoppingCart: state.cart,
    filter: state.filter.range
  };
}

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);

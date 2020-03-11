import React from "react";
import { connect } from "react-redux";
import {
  sortShoppingListDiscount,
  sortShoppingListHighLow,
  sortShoppingListLowHigh
} from "../../redux/actions";

class Sort extends React.Component {
  state = {
    sort: null
  };
  sort(order) {
    if (order === "high-low") {
      this.props.sortShoppingListHighLow();
      this.setState({
        sort: "HL"
      });
    }
    if (order === "low-high") {
      this.props.sortShoppingListLowHigh();
      this.setState({
        sort: "LH"
      });
    }
    if (order === "discount") {
      this.props.sortShoppingListDiscount();
      this.setState({
        sort: "DC"
      });
    }
  }

  render() {
    return (
      <div className="short-by">
        <ul>
          <li>Sort By</li>
          <li>
            <p
              onClick={() => this.sort("high-low")}
              className={this.state.sort === "HL" ? "active" : ""}
            >
              Price -- High Low
            </p>
          </li>
          <li>
            <p
              onClick={() => this.sort("low-high")}
              className={this.state.sort === "LH" ? "active" : ""}
            >
              Price -- Low High
            </p>
          </li>
          <li>
            <p
              onClick={() => this.sort("discount")}
              className={this.state.sort === "DC" ? "active" : ""}
            >
              Discount
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  sortShoppingListDiscount,
  sortShoppingListHighLow,
  sortShoppingListLowHigh
};

export default connect(
  null,
  mapDispatchToProps
)(Sort);

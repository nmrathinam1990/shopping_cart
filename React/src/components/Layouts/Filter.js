import React, { Fragment } from "react";
import Slider from "rc-slider";
import "../../constants/slider.css"
import { connect } from "react-redux";
import { applyFilter } from "../../redux/actions";

const Range = Slider.Range;

class Filter extends React.Component {
  state = {
    start: 100,
    stop: 6000
  };
  handleChange = value => {
    this.setState({
      start: value[0],
      stop: value[1]
    });
  };

  handleApply = () => {
    this.props.applyFilter(this.state);
  };

  render() {
    return (
      <Fragment>
        <div>
          <p>Filters</p>

          <div className="text-left caption">
            <span>{`₹${this.state.start}`}</span>
          </div>
          <div className="text-right caption">
            <span>{`₹${this.state.stop}`}</span>
          </div>
        </div>

        <Range
          allowCross={false}
          min={100}
          max={10000}
          defaultValue={[this.state.start, this.state.stop]}
          onChange={this.handleChange}
        />

        <div className="tag">
          <p>Price</p>
          <button onClick={this.handleApply}>Apply</button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  applyFilter
};

export default connect(
  null,
  mapDispatchToProps
)(Filter);

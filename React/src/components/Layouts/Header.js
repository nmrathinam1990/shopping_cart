import React from "react";
import Search from "./Search";
import CartIcon from "./CartIcon";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li className="left">
            <Link exact="true" to="/" style={{color: '#f7cd22'}}>
              <i className="fa fa-2x fa-star" aria-hidden="true"></i>
            </Link>
          </li>
          <div className="right">
            <li>
              <Search />
            </li>
            <li>
              <Link exact="true" to="/cart" style={{color: '#fff'}}>
                <CartIcon />
              </Link>
            </li>
          </div>
        </ul>
      </header>
    );
  }
}

export default Header;

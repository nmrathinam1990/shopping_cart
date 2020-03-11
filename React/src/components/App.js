import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Footer from "./Layouts/Footer";
import Cart from "./Layouts/Cart";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import { getShoppingList } from "../redux/actions";

function App(props) {
  useEffect(() => {
    const { getShoppingList } = props;
    getShoppingList();
  });

  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

const mapDispatchToProps = {
  getShoppingList
};

export default connect(
  null,
  mapDispatchToProps
)(App);

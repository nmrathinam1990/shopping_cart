import React, { Component } from "react";

import Sort from "./Sort";
import Filter from "./Filter";
import ShoppingList from "./ShoppingList";

class Main extends Component {
  render() {
    return (
      <section>
        <aside>
          <Filter />
        </aside>
        <article>
          <Sort />
          <ShoppingList />
        </article>
      </section>
    );
  }
}

export default Main;

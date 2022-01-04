// Feature 1
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import data from "./data.json";
import { Category } from "./data";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // products: data.products,
      products: Category.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    this.setState((sort) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "پایین ترین"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "بالاترین"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (size) => {
    console.log(size.target.value);
    if (size.target.value === "") {
      this.setState({ size: size.target.value, products: Category.products });
    } else {
      this.setState({
        size: size.target.value,
        products: Category.products.filter(
          (product) => product.availableSizes.indexOf(size.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">فروشگاه</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products && this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">کارت</div>
          </div>
        </main>
        <footer>کپی رایت</footer>
      </div>
    );
  }
}

export default App;

// <div className="grid-container">
//   <main>
//     <div className="content">
//       <div className="main">محصولات</div>
//       <div className="sidebar">کارت</div>
//     </div>
//   </main>

// </div>

// const App = ()=> {

//     return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </Router>
//     );
//   }

// export default App;

{
  /* <main>
          <div className="content">
            <div className="main">محصولات </div>
            <div className="sidebar">کارت</div>
          </div>
        </main> */
}

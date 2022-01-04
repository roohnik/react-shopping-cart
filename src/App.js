// Feature 1
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import data from "./data.json";
import {Category} from "./data";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Products from "./components/Products";

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
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">فروشگاه</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
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

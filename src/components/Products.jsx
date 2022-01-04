// import React, { Component } from "react";
import React from "react";
import {Category} from "../data"
import formatCurrency from "../util";

const Products =()=>{
    return (
      <div>
        <ul className="products">
          {Category.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#" + product._id}>
                  <img src={product.img} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary">اضافه کردن به سبد</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Products;


// export default class Products extends Component {
//   render() {

import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} محصولات</div>
        <div className="filter-sort">
          {" "}
          ترتیب{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>آخرین</option>
            <option value="lowest">پایین ترین</option>
            <option value="highest">بالاترین</option>
          </select>
        </div>
        <div className="filter-size">
          فیلتر{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">همه</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

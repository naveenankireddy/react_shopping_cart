import React, { useState } from "react";
import "../styles/products.css";
import Data from "../data.json";

function Products() {
  let [data, setData] = useState(Data);
  return (
    <div className="grid-container">
      {data.products.map((data, i) => {
        return (
          //   <div className="grid-container">
          <div className="item">
            <div className="img-box">
              <img src={`static/products/${data.sku}` + `_1.jpg`} alt="Image" />
            </div>
            <div className="details">
              <h2>
                {data.title}
                <br />
                <span>Men's Collection</span>
              </h2>
              <div className="price">
                {data.currencyFormat + " " + data.price}
              </div>
              <label>Size</label>
              <ul>
                {data.availableSizes.map((size) => {
                  return <li>{size}</li>;
                })}
              </ul>
              <a href="#">Add to cart</a>
            </div>
          </div>
          //   </div>
        );
      })}
    </div>
  );
}

export default Products;

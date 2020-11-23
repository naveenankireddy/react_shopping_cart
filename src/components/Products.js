import React, { useState } from "react";
import "../styles/products.css";
import { v4 as uuidV4 } from "uuid";

function Products({ allProducts, setCartItems }) {
  return (
    <>
      <h6>{allProducts.length}Products found</h6>
      <div className="grid-container">
        {allProducts.map((product, i) => {
          return (
            <div className="item" key={uuidV4()}>
              <div className="img-box">
                <img
                  src={`static/products/${product.sku}` + `_1.jpg`}
                  alt="Image"
                />
              </div>
              <div className="details">
                <h2>
                  {product.title}
                  <br />
                  <span>Men's Collection</span>
                </h2>
                <div className="price">
                  {product.currencyFormat + " " + product.price}
                </div>
                <label>Size</label>
                <ul className="ul">
                  {product.availableSizes.map((size) => {
                    return (
                      <li className="li" key={uuidV4()}>
                        {size}
                      </li>
                    );
                  })}
                </ul>
                <a
                  onClick={() =>
                    setCartItems((prevState) => {
                      let index = prevState.findIndex(
                        (p) => p.id === product.id
                      );
                      let final = prevState;
                      if (index != -1) {
                        final = prevState.map((product, i) => {
                          if (i === index) {
                            return {
                              ...product,
                              quantity: product.quantity + 1,
                            };
                          }
                          return product;
                        });
                      } else {
                        final = prevState.concat({ ...product, quantity: 1 });
                      }
                      console.log(final);
                      return final;
                    })
                  }
                  href="#"
                >
                  Add to cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;

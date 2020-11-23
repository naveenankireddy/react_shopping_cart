import React from "react";
import "../styles/cart.css";

function Cart({ cartItems, setCartItems, handleDelete }) {
  return (
    <div>
      <ul>
        {cartItems.length < 1
          ? ""
          : cartItems.map((item) => (
              <li>
                <img src={`/static/products/${item.sku}_2.jpg`} alt="Image" />
                <p>{item.title}</p>
                <div className="quantity">
                  <button
                    onClick={() =>
                      setCartItems((prevState) => {
                        let index = prevState.findIndex(
                          (p) => p.id === item.id
                        );
                        let final = prevState;
                        if (index != -1) {
                          final = prevState.map((product, i) => {
                            // if (product.quantity === 0) {
                            //   return;
                            // }
                            if (i === index && product.quantity > 1) {
                              return {
                                ...product,

                                quantity: product.quantity - 1,
                              };
                            }
                            return product;
                          });
                        }
                        return final;
                      })
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      setCartItems((prevState) => {
                        let index = prevState.findIndex(
                          (p) => p.id === item.id
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
                        }
                        return final;
                      })
                    }
                  >
                    +
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Del</button>
                </div>
              </li>
            ))}
      </ul>
      <p>
        total:
        {cartItems.reduce((acc, cv) => {
          acc = acc + cv.price * cv.quantity;
          return acc;
        }, 0)}
      </p>
    </div>
  );
}

export default Cart;

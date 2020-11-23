import React, { useEffect, useState } from "react";
import { products } from "../data.json";
import Products from "./Products";
import "../styles/app.css";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import Navbar from "./Navbar";

function App() {
  const [allSizes, setAllSizes] = useState(
    [...new Set(products.map((p) => p.availableSizes).flat())].map((s) => ({
      label: s,
      checked: false,
    }))
  );
  //   console.log(allSizes);
  const [allProducts, setAllProducts] = useState(products);

  const [filterProducts, setFilterProducts] = useState([]);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartItems));
  }, [cartItems]);

  function handleClick(selectedSize) {
    console.log(selectedSize);
    let updatedSizes = allSizes.map((size) => {
      if (size.label === selectedSize) {
        return {
          ...size,
          checked: !size.checked,
        };
      }
      return size;
    });
    const selectedSizes = updatedSizes
      .filter((singleSize) => singleSize.checked)
      .map((size) => size.label);

    console.log(selectedSizes);
    const updatedProducts = allProducts.filter((product) => {
      return selectedSizes.some((e) => product.availableSizes.includes(e));
    });
    console.log(updatedProducts);
    setAllSizes(updatedSizes);
    setFilterProducts(updatedProducts);
  }

  function handleSortFromLow() {
    setAllProducts(
      [...products].sort((a, b) => {
        console.log(a.price - b.price);
        return a.price - b.price;
      })
    );
  }
  function handleSortFromHigh() {
    setAllProducts(
      [...products].sort((a, b) => {
        console.log(a.price - b.price);
        return b.price - a.price;
      })
    );
  }

  return (
    <div>
      <Navbar
        handleSortFromHigh={handleSortFromHigh}
        handleSortFromLow={handleSortFromLow}
      />
      <main className="main">
        <Sidebar allSizes={allSizes} handleClick={handleClick} />
        <Products
          allProducts={filterProducts.length ? filterProducts : allProducts}
          setCartItems={setCartItems}
        />
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </main>
    </div>
  );
}

export default App;

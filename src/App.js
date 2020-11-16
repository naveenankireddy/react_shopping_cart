import React, { useState, useEffect } from "react";
import Products from "./components/Products";
import Data from "./data.json";

function App() {
  // let [data, setData] = useState(Data);
  return (
    <div>
      {/* {data.products.map((data) => {
        return (
          <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src="images/sample-1.jpg" />
                </div>
                <div class="card-content">
                  <p>{data.title}</p>
                  <p> {data.price}</p>
                </div>
                <button class="card-action">this a button</button>
              </div>
            </div>
          </div>
        );
      })} */}
      <Products />
    </div>
  );
}

export default App;

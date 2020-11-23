import React from "react";

function Navbar({ handleSortFromLow, handleSortFromHigh }) {
  return (
    <div>
      <button onClick={() => handleSortFromLow()}>LowToHigh</button>
      <button onClick={() => handleSortFromHigh()}>HighToLow</button>
    </div>
  );
}

export default Navbar;

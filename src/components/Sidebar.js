import React from "react";
import "../styles/sidebar.css";

function Sidebar({ allSizes, handleClick }) {
  return (
    <div>
      <ul className="sidebar-ul">
        {allSizes.map((size) => {
          return (
            <button
              class={`btn-size ${size.checked ? "activeChecked" : ""}`}
              onClick={() => handleClick(size.label)}
            >
              {size.label}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

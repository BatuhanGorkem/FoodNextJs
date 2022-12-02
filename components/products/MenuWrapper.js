import React from "react";
import MenuItem from "./MenuItem";
const MenuWrapper = () => {
  return (
    <div className="px-20 ">
      <div>Our Menu</div>
      <div>
        <button className="px-6 py-2 rounded-3xl bg-yellow-300">All</button>
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <MenuItem key={index}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuWrapper;

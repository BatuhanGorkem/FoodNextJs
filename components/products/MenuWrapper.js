import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";
const MenuWrapper = ({ categoryList }) => {
  const [active, setActive] = useState(0);
  console.log(categoryList);
  return (
    <div className="px-20 ">
      <div>Our Menu</div>
      <div>
        {categoryList.map((item) => (
          <button
            onClick={() => setActive(item._id)}
            key={item._id}
            className={`px-6 py-2 rounded-3xl bg-yellow-300 ${
              item._id === active && " bg-black text-white transition-all"
            }`}
          >
            {item.title}
          </button>
        ))}
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

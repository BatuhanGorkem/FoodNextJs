import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";
const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      productList.filter(
        (item) => item.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [active, productList, categoryList]);

  return (
    <div className="px-20 ">
      <div>Our Menu</div>
      <div>
        {categoryList.map((item, index) => (
          <button
            onClick={() => setActive(index)}
            key={item._id}
            className={`px-6 py-2 rounded-3xl bg-yellow-300 ${
              index === active && " bg-black text-white transition-all"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        {filtered &&
          filtered.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;

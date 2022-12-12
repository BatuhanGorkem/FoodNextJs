import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ dataCat, dataProduct }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  //   setProducts(res.data);
  // };
  const filterProducts = () => {
    const filtered = dataProduct?.filter(
      (item) => item.category === dataCat[active]?.title.toLowerCase()
    );
    setFiltered(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [active, dataProduct]);

  return (
    <div className="px-40">
      <div className="text-center">Our Products</div>
      <div className="flex justify-center gap-4">
        {dataCat.map((item, index) => (
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
          filtered?.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
      </div>
    </div>
  );
};

export default MenuWrapper;

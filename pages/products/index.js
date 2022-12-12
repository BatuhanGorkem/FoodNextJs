import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "../../components/products/MenuItem";
import Search from "../../components/Search";

const Index = ({ dataCat, dataProduct }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);

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
    <>
      <div className="grid grid-cols-12 px-40">
        <div className="col-span-4 mt-40">
          <ul className="">
            {dataCat.map((item, index) => (
              <li
                onClick={() => setActive(index)}
                className={`my-2 cursor-pointer ${
                  index === active && "text-blue-500"
                }`}
                key={item._id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-40 col-span-8">
          <div className="grid grid-cols-2 gap-3">
            {filtered &&
              filtered?.map((item) => (
                <MenuItem key={item.id} item={item}></MenuItem>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const category = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const dataCat = await category.json();
  const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  const dataProduct = await product.json();

  return {
    props: {
      dataCat,
      dataProduct,
    },
  };
};
export default Index;

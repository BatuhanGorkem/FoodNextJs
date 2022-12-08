import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [srcImage, setSrcImage] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [category, setCategory] = useState("");
  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const changePrice = (e, index) => {
    const newPrices = [...prices];
    newPrices[index] = e.target.value;
    setPrices(newPrices);
  };
  const handleExtra = (e) => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions((prev) => [...prev, extra]);
        // setExtra({ text: "", price: "" });
      }
    }
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setSrcImage(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dbukenovk/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        newProduct
      );
      if (res.status === 201) {
        setIsProductModal(false);
        toast.success("Product added successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
            <h1 addClass="text-[40px] text-center">Add a New Product</h1>

            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1">Choose an image</span>
              <input onChange={(e) => handleOnChange(e)} type="file" />

              {srcImage && (
                <img src={srcImage} alt="" className="w-32 h-32 rounded-full" />
              )}
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                type="text"
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.length > 0 &&
                  categories.map((category) => (
                    <option
                      key={category._id}
                      value={category.title.toLowerCase()}
                    >
                      {category.title}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Prices</span>
              {category === "pizza" ? (
                <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="small"
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="medium"
                  />
                  <input
                    type="number"
                    className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                    placeholder="large"
                  />
                </div>
              ) : (
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="large"
                  onChange={(e) => changePrice(e, 0)}
                />
              )}
            </div>
            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
                <input
                  type="text"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="item"
                  name="text"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="price"
                  name="price"
                  onChange={(e) =>
                    setExtra({ ...extra, [e.target.name]: e.target.value })
                  }
                />
                <button className="btn-primary ml-auto" onClick={handleExtra}>
                  Add
                </button>
              </div>
              <div className="mt-2">
                {extraOptions.map((item, index) => (
                  <span
                    onClick={() =>
                      setExtraOptions(
                        extraOptions.filter((_, i) => i !== index)
                      )
                    }
                    key={index}
                    className="inline-block border border-orange-500 text-orange-500  p-1 rounded-xl text-xs"
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="btn-primary bg-blue-500 hover:bg-blue-600 mt-4 "
                onClick={handleCreate}
              >
                Create
              </button>
            </div>
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsProductModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;

import React from "react";
import { useState } from "react";
import Input from "../form/Input";

const Category = () => {
  const [category, setCategory] = useState(["pizza"]);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div className="flex items-center">
        <Input
          placeholder="Add a new Category"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        ></Input>
        <button
          className=" rounded-lg px-3 py-1 bg-red-400 text-white"
          onClick={() => {
            setCategory([...category, inputText]);
            setInputText("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        {category.map((category, index) => (
          <div className="flex items-center justify-between" key={index}>
            <b>{category}</b>
            <button
              className="bg-red-400 rounded-lg px-2 py-1 text-white"
              onClick={() =>
                setCategory(category.filter((cat) => cat !== category))
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

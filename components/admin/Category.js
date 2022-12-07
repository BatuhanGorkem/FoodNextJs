import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Input from "../form/Input";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        console.log(res.data);
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      console.log(res.data);
      setCategory([...category, res.data]);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
        );
        console.log(res.data);
        setCategory(category.filter((cat) => cat._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          onClick={handleCreate}
        >
          Add
        </button>
      </div>
      <div>
        {category.map((category) => (
          <div
            className="flex items-center justify-between my-3"
            key={category._id}
          >
            <b>{category.title}</b>
            <button
              className="bg-red-400 rounded-lg px-2 py-1 text-white"
              onClick={() => handleDelete(category._id)}
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

import React from "react";

const Search = (props) => {
  const { placeholder, type, name, value, onChange } = props;
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className=" h-12 border-2 border-gray-300 rounded-lg px-4 focus:outline-none focus:border-red-500"
    ></input>
  );
};

export default Search;

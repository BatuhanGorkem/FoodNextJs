import React from "react";
import NavLink from "../components/NavLink";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Link from "next/link";
const Header = () => {
  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Menu", link: "/menu" },
    { id: 4, name: "Book Table", link: "/BookTable" },
  ];
  return (
    <div className="flex justify-between items-center  px-20  ">
      <div>
        <h1 className="text-[60px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          JOBS
        </h1>
      </div>
      <div className="flex gap-5 font-semibold">
        {items.map((item) => (
          <NavLink key={item.key} name={item.name} link={item.link} />
        ))}
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/auth/login">
          <FaUserAlt />
        </Link>
        <Link href="/cart">
          <FaShoppingCart />
        </Link>
        <Link href="/auth/login">
          <FaSearch />
        </Link>
        <button className=" relative bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-3 rounded-lg  text-white hover:scale-105 transition-all">
          <span className="t">Order Online</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

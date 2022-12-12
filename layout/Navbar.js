import React from "react";
import NavLink from "../components/NavLink";
import Link from "next/link";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
const Navbar = () => {
  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Contact", link: "/contact" },
    { id: 3, name: "Products", link: "/products" },
    { id: 4, name: "About", link: "/about" },
  ];
  return (
    <>
      <nav className="">
        <div className="fixed backdrop-blur bg-white/90 w-full top-0 left-0 right-0 shadow-md shadow-cyan-500/50  z-20 px-40 h-auto py-1  flex justify-between flex-wrap items-center mx-auto transition-all">
          <div className="text-[60px] font-bold">JOBS</div>

          <div className="text-[18px] flex gap-5 ">
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
      </nav>
    </>
  );
};

export default Navbar;

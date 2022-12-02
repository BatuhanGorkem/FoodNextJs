import React, { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Title from "../ui/Title";

const Header = () => {
  const [IsSearchModal, setIsSearchModal] = useState(false);
  return (
    <>
      <div className="h-[5.5rem] bg-slate-700 px-10 ">
        <div className="flex justify-between text-white  items-center h-full">
          <div className="text-[2rem] text-red-500 font-bold">JOBS</div>
          <div>
            <nav>
              <ul className="flex gap-4 ">
                <li>HOME</li>
                <li>MENU</li>
                <li>ABOUT</li>
                <li>BOOK TABLE</li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-3 items-center">
            <a href="">
              <FaUserAlt className="hover:text-yellow-300 transition-all" />
            </a>
            <a href="">
              <FaShoppingCart className="hover:text-yellow-300 transition-all" />
            </a>

            <FaSearch
              onClick={() => setIsSearchModal((prev) => !prev)}
              className="hover:text-yellow-300 transition-all"
            />

            <a href="">
              <button className="rounded-lg cursor-pointer bg-yellow-600 p-1">
                OrderOnline
              </button>
            </a>
          </div>
        </div>
        {IsSearchModal && (
          <div className="position w-screen h-screen bg-black z-50">
            <Title title="title" />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

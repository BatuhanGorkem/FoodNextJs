import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import img from "../../public/images/64 - N87odiI.jpg";
const MenuItem = () => {
  return (
    <div className="bg-[#cffafe] text-white text-sm rounded-xl text-black">
      <div className="">
        <Link href="/product">
          <Image
            className="rounded-b-[40px] cursor-pointer hover:scale-105 transition-all "
            src={img}
            alt="img"
          ></Image>
        </Link>
      </div>
      <div className="px-2 [&_*]:pb-2">
        <h1 className="font-bold pt-1">Delicios Pizza</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dolore consectetur facilis magni, mollitia voluptas?
        </p>
        <div className="flex justify-between items-center">
          <p>$20</p>
          <button className=" bg-yellow-300 rounded-full ">
            <MdShoppingCart className="inline" size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

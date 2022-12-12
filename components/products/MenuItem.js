import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import img from "../../public/images/64 - N87odiI.jpg";
const MenuItem = ({ item }) => {
  return (
    <div className="bg-[#cffafe] shadow-lg text-sm rounded-xl text-black">
      <div className="">
        <Link href="/product">
          <Image
            className=" cursor-pointer  "
            src={item.img}
            width={400}
            height={400}
            alt="img"
            priority
          ></Image>
        </Link>
      </div>
      <div className="px-2 [&_*]:pb-2">
        <h1 className="font-bold pt-1">{item.title}</h1>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;

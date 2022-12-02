import React from "react";
import Image from "next/image";
import img from ".././public/images/deneme.jpg";
import { MdShoppingCart } from "react-icons/md";
const CampaignItem = () => {
  return (
    <div className=" bg-slate-500 rounded-md text-[14px] ">
      <div className="flex py-6 px-3 items-center gap-5">
        <Image
          className="rounded-full border-4  border-red-700 hover:scale-105 transition-all"
          src={img}
          alt="img"
          width={150}
          height={150}
          objectFit="cover"
        />
        <div className="[&_*]:mb-1 [&_*]:cursor-pointer pr-20">
          <h1>Tasty Thursday</h1>
          <h1>20% Off</h1>
          <button className=" hover:scale-105 transition-all  rounded-xl px-5  bg-yellow-500">
            Order Now <MdShoppingCart className="inline" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;

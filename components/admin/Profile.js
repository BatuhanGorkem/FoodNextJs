import Image from "next/image";
import React from "react";
import img from "../.././public/images/deneme.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
const Profile = ({ tabs, setTabs }) => {
  const { push } = useRouter();
  const closeAdmin = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          toast.success("Admin Logout Success!");
          push("/admin");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border border-gray-300 text-center ">
      <div>
        <Image
          className="rounded-full mx-auto"
          src={img}
          alt="img"
          width={55}
          height={55}
        ></Image>
        <h1>Batuhan Görkem</h1>
      </div>
      <div onClick={() => setTabs(0)} className="my-2 border cursor-pointer">
        <span>Products</span>
      </div>
      <div onClick={() => setTabs(1)} className="my-2 border cursor-pointer">
        <span>Orders</span>
      </div>
      <div onClick={() => setTabs(2)} className="my-2 border cursor-pointer">
        <span>Categories</span>
      </div>
      <div onClick={() => setTabs(3)} className="my-2 border cursor-pointer">
        <span>Footer</span>
      </div>
      <div onClick={closeAdmin} className="my-2 border cursor-pointer">
        <span>Exıt</span>
      </div>
    </div>
  );
};

export default Profile;

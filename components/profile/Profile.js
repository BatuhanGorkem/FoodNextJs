import { signOut, useSession, getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import img from "../.././public/images/deneme.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Profile = ({ setTabs, user }) => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const handleSignOut = () => {
    if (window.confirm("Are you sure?")) {
      signOut({ redirect: false });
      toast.success("Logout Success!");
      push("/auth/login");
    }
  };
  useEffect(() => {
    if (!session) {
      push("/auth/login");
    }
  }, [session, push]);

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
        <h1>{user.fullName}</h1>
      </div>
      <div onClick={() => setTabs(0)} className="my-2 border cursor-pointer">
        <span>Account</span>
      </div>
      <div onClick={() => setTabs(1)} className="my-2 border cursor-pointer">
        <span>Password</span>
      </div>
      <div onClick={() => setTabs(2)} className="my-2 border cursor-pointer">
        <span>Orders</span>
      </div>
      <div onClick={handleSignOut} className="my-2 border cursor-pointer">
        <span>Exıt</span>
      </div>
    </div>
  );
};

export default Profile;

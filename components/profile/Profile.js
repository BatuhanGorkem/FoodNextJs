import Image from "next/image";
import React from "react";
import img from "../.././public/images/deneme.jpg";
import styles from "./Profile.module.scss";
import Input from "../form/Input";
const Profile = () => {
  return (
    <div className={`flex ${styles.input}`}>
      <div>
        <div>
          <Image
            className="rounded-full"
            src={img}
            alt="img"
            width={55}
            height={55}
          ></Image>
          <h1>Batuhan Görkem</h1>
        </div>
        <div>
          <span>Account</span>
        </div>
        <div>
          <span>Password</span>
        </div>
        <div>
          <span>Orders</span>
        </div>
        <div>
          <span>Exıt</span>
        </div>
      </div>
      <div>
        <form action="">
          <h1>Account Settings</h1>
        </form>
      </div>
    </div>
  );
};

export default Profile;

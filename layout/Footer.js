import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  const getFooter = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
      setFooter(res.data[0]);
      console.log(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFooter();
  }, []);
  return (
    <>
      <div className="  w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className=" flex justify-center gap-20 py-10">
          <div className={styles.footerItem}>
            <h1>Contact Us</h1>
            <div>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <i></i>
                <span>Location</span>
              </a>
            </div>
            <div>
              <i></i>
              <span>{footer?.phone} </span>
            </div>
            <div>
              <i></i>
              <span>{footer?.email}</span>
            </div>
          </div>
          <div className="">
            <h1>JOBS</h1>
            <p>{footer?.desc}</p>
            <div></div>
          </div>
          <div>
            <h1>Opening House</h1>
            <span>{footer?.openingHours?.day}</span>
            <span>{footer?.openingHours?.hour}</span>
          </div>
          <div>
            {footer?.socialMedia?.map((item) => (
              <a
                href={item?.link}
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
                key={item._id}
                target="_blank"
                rel="noreferrer"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

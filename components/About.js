import React from "react";
import img from "../public/images/about-img.png";
import Image from "next/image";
import { useState } from "react";
const About = ({ data }) => {
  return (
    <div className=" ">
      {data.map((data) => (
        <div
          key={data._id}
          className="mt-40 h-screen grid grid-cols-2 px-40 gap-x-10"
        >
          <div className="">
            <h1>HAKKIMIZDA</h1>
            <h1>{data.title}</h1>
          </div>
          <div>
            <div>
              <h1>Telefon</h1>
              <p>{data.phone}</p>
            </div>
            <div>
              <h1>E-Posta</h1>
              <p>{data.email}</p>
            </div>
            <div>
              <h1>Konum</h1>
              <p>{data.address}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;

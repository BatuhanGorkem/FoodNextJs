import React from "react";
import img from "../public/images/about-img.png";
import Image from "next/image";
const About = () => {
  return (
    <div className="bg-secondary px-20   text-white grid grid-cols-2 mt-10 h-screen  ">
      <div className="place-self-center"></div>
      <div className="[&_*]:mb-8 place-self-center">
        <h1>We are Jobs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsum laudantium reprehenderit aliquam libero omnis hic natus, ducimus
          illum molestias? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iste, laboriosam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Similique sint impedit incidunt vitae quas sapiente
          corporis reiciendis ipsum saepe illum!
        </p>
        <button className="bg-primary px-3 rounded-lg py-1">Read More</button>
      </div>
    </div>
  );
};

export default About;

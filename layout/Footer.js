import React from "react";

const Footer = () => {
  return (
    <div className="flex px-20 justify-center gap-5 text-center  bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4">
      <div className="">
        <h1>Contact Us</h1>
        <div>
          <i></i>
          <span>Location</span>
        </div>
        <div>
          <i></i>
          <span>534 366 14 87 </span>
        </div>
        <div>
          <i></i>
          <span>batuhan@gmail.com</span>
        </div>
      </div>
      <div className="px-5">
        <h1>JOBS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam
          officiis facere itaque ducimus expedita corporis necessitatibus
          provident distinctio saepe. Expedita
        </p>
        <div></div>
      </div>
      <div>
        <h1>Opening House</h1>
        <span>Everyday</span>
        <span>14.00 - 12.00</span>
      </div>
    </div>
  );
};

export default Footer;

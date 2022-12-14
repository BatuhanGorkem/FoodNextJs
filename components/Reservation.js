import React from "react";
import Input from "./form/Input";
import { useFormik } from "formik";

import { reservationSchema } from "../schema/reservationSchema";

const Reservation = () => {
  const onSubmit = async (value, actions) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
    alert(JSON.stringify(value, null, 2));

    actions.resetForm();
  };
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        topic: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      values: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "topic",
      type: "text",
      placeholder: "Topic",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    // {
    //   id: 5,
    //   name: "date",
    //   type: "datetime-local",
    //   placeholder: "How Many Persons?",
    //   value: values.date,
    //   errorMessage: errors.date,
    //   touched: touched.date,
    // },
  ];

  return (
    <div className="py-8 flex gap-3 px-40 ">
      <div className="basis-1/2 ">
        <h1 className=" text-[20px] font-semibold">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            ></Input>
          ))}
          <button
            type="submit"
            className=" relative bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-3 rounded-lg  text-white hover:scale-105 transition-all"
          >
            <span>Send</span>
          </button>
        </form>
      </div>
      <div className="basis-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12496.22546433687!2d27.178727602331538!3d38.46325998937945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962a90d76ecff%3A0xb16364e47894b32f!2sFolkart%20Towers!5e0!3m2!1str!2str!4v1669894799385!5m2!1str!2str"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Reservation;

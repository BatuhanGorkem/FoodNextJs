import React, { useState } from "react";
import styles from "./Account.module.scss";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profileSchema";

const Account = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        address: "",
        job: "",
        bio: "",
      },
      validationSchema: profileSchema,
      onSubmit,
    });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Address",
      value: values.address,
      errorMessage: errors.address,
      touched: touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Job",
      value: values.job,
      errorMessage: errors.job,
      touched: touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];

  return (
    <div className="text-center ">
      <form action="">
        <h1 className="text-center text-[30px] font-bold">Account Settings</h1>
        <div className="grid grid-cols-2 gap-3">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          ))}
        </div>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition-all  rounded-xl px-5 py-2 text-center mt-2"
          type="submit"
          onClick={handleSubmit}
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default Account;

import React from "react";
import { formik } from "formik";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../form/Input";
import { aboutSchema } from "../../schema/aboutSchema";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState([]);

  const getAbout = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`);
      const data = await res.json();
      setAbout(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAbout();
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/about/${about._id}`,
        {
          title: values.title,
          phone: values.phone,
          email: values.email,
          address: values.address,
        }
      );
      if (res.status === 200) {
        toast.success("About updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        title: about?.title,
        phone: about?.phone,
        email: about?.email,
        address: about?.address,
      },
      validationSchema: aboutSchema,
      onSubmit,
    });
  const inputs = [
    {
      name: "title",
      type: "textarea",
      placeholder: "Title",
      value: values.title,
      onChange: handleChange,
      onBlur: handleBlur,
      errorMessage: errors.title,
      touched: touched.title,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Phone",
      value: values.phone,
      onChange: handleChange,
      onBlur: handleBlur,
      errorMessage: errors.phone,
      touched: touched.phone,
    },
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      value: values.email,
      onChange: handleChange,
      onBlur: handleBlur,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      name: "address",
      type: "text",
      placeholder: "Address",
      value: values.address,
      onChange: handleChange,
      onBlur: handleBlur,
      errorMessage: errors.address,
      touched: touched.address,
    },
  ];
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <h1>ABOUT SETTİNGS</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
        <button type="submit" className=" ">
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default About;

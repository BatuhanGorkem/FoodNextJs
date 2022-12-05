import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { footerSchema } from "../../schema/footerSchema";
import Input from "../form/Input";

const Footer = () => {
  const [linkAdress, setLinkAdress] = useState("");
  const [iconName, setIconName] = useState("");
  const [icons, setIcons] = useState([
    "fa fa-facebook",
    "fa fa-twitter",
    "fa fa-instagram",
  ]);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        location: "",
        phoneNumber: "",
        email: "",
        desc: "",
        day: "",
        time: "",
      },
      onSubmit,
      validationSchema: footerSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: values.location,
      errorMessage: errors.location,
      touched: touched.location,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },

    {
      id: 4,
      name: "desc",
      type: "text",
      placeholder: "Your Description",
      value: values.desc,
      errorMessage: errors.desc,
      touched: touched.desc,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Write a Day",
      value: values.day,
      errorMessage: errors.day,
      touched: touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "text",
      placeholder: "Write a Time",
      value: values.time,
      errorMessage: errors.time,
      touched: touched.time,
    },
  ];
  return (
    <form>
      <h1>FOOTER SETTİNGS</h1>
      <div className="grid lg:grid-cols-2 gap-3">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ))}
      </div>
      <div>
        <div>
          <Input placeholder="Link Address" value="https://" onChange="" />
          <Input
            placeholder="Icon Name"
            onChange={(e) => setIconName(e.target.name)}
            value={iconName}
          ></Input>
          <button
            className="bg-red-400 rounded-lg  px-3 py-1 text-white"
            onClick={() => {
              setIcons((prev) => prev.filter((item, i) => i !== index));
            }}
          >
            Add
          </button>
        </div>
      </div>
      <button className="btn-primary mt-4">Update</button>
    </form>
  );
};

export default Footer;

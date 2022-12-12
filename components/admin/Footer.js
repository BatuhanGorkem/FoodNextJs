import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { footerSchema } from "../../schema/footerSchema";
import Input from "../form/Input";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  const [iconName, setIconName] = useState("fa fa-");
  const [linkAddress, setLinkAddress] = useState("https://");
  const [icons, setIcons] = useState([]);

  const getFooter = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
      setFooter(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFooter();
  }, []);

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/footer/${footer._id}`,
        {
          location: values.location,
          email: values.email,
          phoneNumber: values.phoneNumber,
          desc: values.desc,
          openingHours: {
            day: values.day,
            hour: values.time,
          },
          socialMedia: socialMediaLinks,
        }
      );
      if (res.status === 200) {
        toast.success("Footer updated successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        location: footer?.location,
        phone: footer?.phone,
        email: footer?.email,
        desc: footer?.desc,
        day: footer?.openingHours?.day,
        time: footer?.openingHours?.hour,
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
      name: "phone",
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
    <form onSubmit={handleSubmit}>
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
          <Input
            placeholder="Link Address"
            value={linkAdress}
            onChange={(e) => setLinkAdress(e.target.value)}
          />
          <Input
            placeholder="Icon Name"
            onChange={(e) => setIconName(e.target.value)}
            value={iconName}
          ></Input>
          <button
            type="button"
            className="bg-red-400 rounded-lg  px-3 py-1 text-white"
            onClick={() => {
              setIcons((prev) => prev.filter((item, i) => i !== index));
            }}
          >
            Add
          </button>
        </div>
      </div>
      <button type="submit" className="bg-red-400 mt-4 ">
        Update
      </button>
    </form>
  );
};

export default Footer;

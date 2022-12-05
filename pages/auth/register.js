import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import Link from "next/link";
import Layout from "../../layout/Layout";
import axios from "axios";
const Register = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log(values);
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: registerSchema,
    });
  console.log(values);
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your fullname",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      touched: touched.confirmPassword,
    },
  ];

  return (
    <Layout>
      <div className="px-40 py-3 h-[600px]">
        <form
          className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[30px] font-semibold pb-6"> Register</h1>
          <div className="flex flex-col gap-y-3 w-full">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <div className="flex flex-col w-full gap-y-3 mt-6">
            <button
              type="submit"
              className="outline outline-blue-600  hover:bg-blue-600 hover:text-white transition-all mx-60 rounded-xl"
            >
              REGİSTER
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

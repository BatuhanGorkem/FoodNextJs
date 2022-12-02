import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import Link from "next/link";
import Layout from "../../layout/Layout";
const Register = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 4000));

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
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <Layout title="Register">
      <div className="px-80">
        <h1 className="text-center text-[40px] font-bold">REGİSTER</h1>
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
            className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-10 rounded-lg  text-white hover:scale-105 transition-all"
          >
            Register
          </button>
        </form>
        <Link href="/auth/login">
          <span className="text-sm underline cursor-pointer text-secondary">
            Do you have a account?
          </span>
        </Link>
        <button className="text-center">GİTHUB</button>
      </div>
    </Layout>
  );
};

export default Register;

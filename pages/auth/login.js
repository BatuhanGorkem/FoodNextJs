import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import Layout from "../../layout/Layout";
import Link from "next/link";
const Login = () => {
  const onSubmit = async (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });
  console.log(values);
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <Layout title="Login">
      <div className="px-80 py-20">
        <h1 className="text-center text-[40px] font-bold">Login</h1>
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
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 py-1 px-10 rounded-lg  text-white hover:scale-105 transition-all"
          >
            LOGIN
          </button>
        </form>
        <Link href="/auth/register">
          <span className="text-sm underline cursor-pointer text-secondary">
            Do you dont have a account?
          </span>
        </Link>
        <button className="">GİTHUB</button>
      </div>
    </Layout>
  );
};

export default Login;

import { useFormik } from "formik";
import Link from "next/link";
import Input from "../../components/form/Input";
import Layout from "../../layout/Layout";
import { adminSchema } from "../../schema/adminSchema";

const Login = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
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
    <Layout>
      <div className="px-40 py-3 h-[600px]">
        <form
          className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[30px] font-semibold pb-6">Admin Login</h1>
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
              LOGIN
            </button>
            <Link href="/">
              <span className="text-sm underline cursor-pointer text-secondary ">
                Home Page
              </span>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

import Input from "../../components/form/Input";
import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import Link from "next/link";
import { useSession, signIn, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    const { email, password } = values;

    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);

    actions.resetForm();
    push("/profile");
  };

  useEffect(() => {
    if (session) {
      push("/profile");
    }
  }, [session, push]);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

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
    <div className="px-40 py-3 h-[600px]">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[30px] font-semibold pb-6"> Login</h1>
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
          <button
            onClick={() => signIn("github")}
            type="button"
            className="outline outline-blue-600  hover:bg-blue-600 hover:text-white transition-all mx-60 rounded-xl"
          >
            GİTHUB
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-secondary ">
              Do you have an account? Register
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default Login;

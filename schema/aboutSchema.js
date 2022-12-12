import * as Yup from "yup";

export const aboutSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().required("Email is required"),
  address: Yup.string().required("Address is required"),
});

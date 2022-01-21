import { object, string } from "yup";

export const contactValidationSchema = object({
  name: string().required("Please enter your name"),
  email: string()
    .email("Please enter a valid email")
    .required("Please enter a valid email"),
  message: string().required("Please enter a message"),
});

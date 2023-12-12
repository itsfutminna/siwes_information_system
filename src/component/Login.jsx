import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import FormRow from "./FormRow";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = { username: "", password: "" };

  let userSchema = object({
    username: string().required("This filed cannot be empty"),
    password: string().required("This filed cannot be empty"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleSubmit() {
    navigate("app");
  }
  return (
    <div className=" border-slate-100 border rounded-lg p-4 text-slate-100 basis-1/4">
      <p className="text-2xl font-semibold">LOGIN HERE</p>

      <Form type="login" onSubmit={formik.handleSubmit}>
        <FormRow
          label="User Name"
          error={formik.touched.username ? formik.errors.username : null}
        >
          <Input
            type="text"
            placeholder="username"
            id="username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </FormRow>
        <FormRow
          label="Password"
          error={formik.touched.password ? formik.errors.password : null}
        >
          <Input
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormRow>
        <Button>Login</Button>
      </Form>
    </div>
  );
}

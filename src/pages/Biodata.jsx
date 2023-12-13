import { object, string } from "yup";
import FormRow from "../component/FormRow";
import { useFormik } from "formik";
import Input from "../component/Input";
import Form from "../component/Form";
import Button from "../component/Button";
import Select from "../component/Select";

export default function Biodata() {
  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "",
    department: "",
    startdate: "",
    enddate: "",
    institution: "",
  };

  let studentSchema = object({
    firstname: string().required("filed cannot be empty"),
    middlename: string().required("filed cannot be empty"),
    lastname: string().required("filed cannot be empty"),
    sex: string().required("filed cannot be empty"),
    department: string().required("filed cannot be empty"),
    startdate: string().required("filed cannot be empty"),
    enddate: string().required("filed cannot be empty"),
    institution: string().required("filed cannot be empty"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: studentSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleSubmit(values) {
    alert(JSON.stringify(values, null, 2));
    formik.resetForm();
  }
  return (
    <div className="flex items-center  h-full p-8">
      <Form onSubmit={formik.handleSubmit}>
        <FormRow
          label="First Name"
          error={formik.touched.firstname ? formik.errors.firstname : null}
        >
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
        </FormRow>

        <FormRow
          label="Middle Name"
          error={formik.touched.middlename ? formik.errors.middlename : null}
        >
          <Input
            type="text"
            name="middlename"
            id="middlename"
            placeholder="Middle Name"
            onChange={formik.handleChange}
            value={formik.values.middlename}
          />
        </FormRow>
        <FormRow
          label="Last Name"
          error={formik.touched.lastname ? formik.errors.lastname : null}
        >
          <Input
            className="px-4 py-1 rounded-md outline-none ring ring-white focus:ring-Futpurple hover:ring-purple-300"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
        </FormRow>
        <FormRow
          label="Sex"
          error={formik.touched.sex ? formik.errors.sex : null}
        >
          <Select
            name="sex"
            id="sex"
            onChange={formik.handleChange}
            value={formik.values.sex}
          >
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormRow>
        <FormRow
          label="Department"
          error={formik.touched.department ? formik.errors.department : null}
        >
          <Input
            type="text"
            name="department"
            id="department"
            placeholder="Department"
            onChange={formik.handleChange}
            value={formik.values.department}
          />
        </FormRow>
        <FormRow
          label="Start Date"
          error={formik.touched.startdate ? formik.errors.startdate : null}
        >
          <Input
            type="text"
            name="startdate"
            id="startdate"
            placeholder="Start Date"
            onChange={formik.handleChange}
            value={formik.values.startdate}
          />
        </FormRow>
        <FormRow
          label="End Date"
          error={formik.touched.enddate ? formik.errors.enddate : null}
        >
          <Input
            type="text"
            name="enddate"
            id="enddate"
            placeholder="End Date"
            onChange={formik.handleChange}
            value={formik.values.enddate}
          />
        </FormRow>
        <FormRow
          label="Institution"
          error={formik.touched.institution ? formik.errors.institution : null}
        >
          <Input
            type="text"
            name="institution"
            id="institution"
            placeholder="Institution"
            onChange={formik.handleChange}
            value={formik.values.institution}
          />
        </FormRow>
        <Button>Register</Button>
      </Form>
    </div>
  );
}

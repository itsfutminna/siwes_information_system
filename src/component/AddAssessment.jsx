/* eslint-disable react/prop-types */

import { useState } from "react";
import Score from "./Score";
import { object, string } from "yup";
import { useFormik } from "formik";
import Range from "./Range";
import Input from "./Input";
import FormRow from "./FormRow";
import Button from "./Button";
import AssessmentList from "./AssessmentList";
import toast from "react-hot-toast";

const initialValues = {
  problemsolving: "1",
  innovation: "1",
  qualitywork: "2",
  timeliness: "3",
  attendance: "8",
  adaptability: "6",
  proffessionalconduct: "9",
  technicalskills: "",
  softskills: "",
  remark: "",
};
export default function AddAssessment() {
  let studentSchema = object({
    problemsolving: string().required(),
    innovation: string().required(),
    qualitywork: string().required(),
    timeliness: string().required(),
    attendance: string().required(),
    adaptability: string().required(),
    proffessionalconduct: string().required(),
    technicalskills: string().required(),
    softskills: string().required(),
    remark: string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: studentSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleSubmit() {
    // alert(JSON.stringify(values, null, 2));
    toast.success("Assessment submitted successfully!", {
      position: "top-center",
      duration: 3000,
    });
    // formik.resetForm();
  }

  const [currentlyOpen, setCurrentlyOpen] = useState();

  function handleToggle(id) {
    setCurrentlyOpen(id === currentlyOpen ? null : id);
  }
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4  mr-2">
      <AssessmentList
        title="General Performance"
        id={0}
        key={0}
        currentlyOpen={currentlyOpen}
        onClick={() => handleToggle(0)}
      >
        <Score label="Problem Solving" score={formik.values.problemsolving}>
          <Range
            id="problemsolving"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.problemsolving}
          />
        </Score>
        <Score label="Innovation" score={formik.values.innovation}>
          <Range
            id="innovation"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.innovation}
          />
        </Score>
        <Score label="Quality Work" score={formik.values.qualitywork}>
          <Range
            id="qualitywork"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.qualityWork}
          />
        </Score>
        <Score label="Timeliness" score={formik.values.timeliness}>
          <Range
            id="timeliness"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.timeliness}
          />
        </Score>
      </AssessmentList>
      <AssessmentList
        title="Proffessionalism and Work Ethics"
        id={1}
        key={1}
        currentlyOpen={currentlyOpen}
        onClick={() => handleToggle(1)}
      >
        <Score
          label="Attendance & Punctuality"
          score={formik.values.attendance}
        >
          <Range
            id="attendance"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.attendance}
          />
        </Score>
        <Score label="Adaptability" score={formik.values.adaptability}>
          <Range
            id="adaptability"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.adaptability}
          />
        </Score>
        <Score
          label="Professional Conduct"
          score={formik.values.proffessionalconduct}
        >
          <Range
            id="proffessionalconduct"
            min={1}
            max={10}
            onChange={formik.handleChange}
            value={formik.values.proffessionalconduct}
          />
        </Score>
      </AssessmentList>
      <AssessmentList
        title="Skills Development"
        id={2}
        key={2}
        currentlyOpen={currentlyOpen}
        onClick={() => handleToggle(2)}
      >
        <FormRow
          label="Technical Skills"
          error={
            formik.touched.technicalskills
              ? formik.errors.technicalskills
              : null
          }
        >
          <Input
            type="text"
            placeholder="Technical Skills"
            id="technicalskills"
            name="technicalskills"
            onChange={formik.handleChange}
            value={formik.values.technicalskills}
          />
        </FormRow>
        <FormRow
          label="Soft Skills"
          error={formik.touched.softskills ? formik.errors.softskills : null}
        >
          <Input
            type="text"
            placeholder="Soft Skills"
            id="softskills"
            name="softskills"
            onChange={formik.handleChange}
            value={formik.values.softskills}
          />
        </FormRow>
      </AssessmentList>
      <AssessmentList
        title="Remark"
        id={3}
        key={3}
        currentlyOpen={currentlyOpen}
        onClick={() => handleToggle(3)}
      >
        <textarea
          className="w-1/2 h-44 p-2 shadow-lg"
          type="text"
          placeholder="Enter remark"
          id="remark"
          name="remark"
          onChange={formik.handleChange}
          value={formik.values.remark}
        />
      </AssessmentList>

      <Button type="others" className=" col-span-2 w-1/3 mx-auto">
        Submit
      </Button>
    </form>
  );
}

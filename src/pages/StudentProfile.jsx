import { useState } from "react";
import Accordion from "../component/Accordion";
import AssessmentDetail from "../component/AssessmentDetail";
import Button from "../component/Button";

export default function StudentProfile() {
  const [assess, setAssess] = useState(false);
  return (
    <div className="flex  gap-8 p-8">
      <div className="flex flex-col  w-fit font-semibold">
        <img
          src="/happy.jpg"
          alt="profile-picture"
          className="h-32 w-32 aspect-square rounded-full"
        />
        <p>Name of Student</p>
        <p>Matric Number</p>
        <p>Student Department</p>
        <p>Student institution</p>
        <p>Start Date</p>
        <p>End Date</p>
        <p>Status</p>
        <p>Sex</p>
      </div>
      <div className="flex-1  h-[31rem] overflow-y-auto">
        <AssessmentDetail />
        <Button type="others" onClick={() => setAssess((assess) => !assess)}>
          Add Assessment
        </Button>
        {assess && <Accordion />}
      </div>
    </div>
  );
}

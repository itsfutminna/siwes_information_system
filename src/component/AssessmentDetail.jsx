/* eslint-disable react/prop-types */
import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const Assessment = [
  {
    GenPerformance: {
      problemSolving: "5",
      Innovation: "2",
      QualityWork: "6",
      Timeliness: "1",
    },
    Proffessionalism: {
      Attendance: "8",
      Adaptability: "7",
      ProffessionalConduct: "2",
    },
    SkillDevelopment: {
      TechnicalSkills: "HardWare repairs",
      SoftSkills: "Web Development",
    },
    Remark: "There is always room for improvement",
  },
  {
    GenPerformance: {
      problemSolving: "7",
      Innovation: "2",
      QualityWork: "5",
      Timeliness: "6",
    },
    Proffessionalism: {
      Attendance: "6",
      Adaptability: "5",
      ProffessionalConduct: "7",
    },
    SkillDevelopment: {
      TechnicalSkills: "Networking",
      SoftSkills: "UI/UX with Figma",
    },
    Remark: "You can do better than this",
  },
];

export default function AssessmentDetail() {
  const [tabNum, setTabNum] = useState(0);
  const totalAssessment = Assessment.length;

  return (
    <div className=" mr-2">
      {Array.from({ length: totalAssessment }, (_, i) => (
        <Tab num={i} key={i} activeTab={tabNum} onClick={setTabNum}>
          Month-{i + 1}
        </Tab>
      ))}
      <TabContent num={tabNum} key={tabNum} Assessment={Assessment} />
    </div>
  );
}

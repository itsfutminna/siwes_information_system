/* eslint-disable react/prop-types */
import { useState } from "react";

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
    Remark: "You can do better than this",
  },
  {
    GenPerformance: {
      problemSolving: "1",
      Innovation: "1",
      QualityWork: "1",
      Timeliness: "1",
    },
    Proffessionalism: {
      Attendance: "1",
      Adaptability: "1",
      ProffessionalConduct: "1",
    },
    SkillDevelopment: {
      TechnicalSkills: "Networking",
      SoftSkills: "Coding",
    },
    Remark: "Work harder on your skills",
  },
];

export default function AssessmentDetail() {
  const [tabNum, setTabNum] = useState(0);
  const totalAssessment = Assessment.length;
  //   const [tabActive, setTabActive] = useState(0)

  return (
    <div>
      {Array.from({ length: totalAssessment }, (_, i) => (
        <Tab num={i} key={i} activeTab={tabNum} onClick={setTabNum}>
          Month-{i + 1}
        </Tab>
      ))}

      {/* <Tab num={1} activeTab={tabNum} onClick={setTabNum}>
            Month-3
          </Tab> */}
      <TabbedContent num={tabNum} key={tabNum} Assessment={Assessment} />
    </div>
  );
}

function Tab({ onClick, num, activeTab, children }) {
  return (
    <button
      onClick={() => onClick(num)}
      className={` ${
        num === activeTab && "bg-blue-600"
      }  bg-blue-100 rounded-md px-4`}
    >
      {children}
    </button>
  );
}

function TabbedContent({ num, Assessment }) {
  const item = Assessment.at(num);
  return (
    <div>
      <div>
        <h1>General Performance</h1>
        <p>
          Problem Solving <span>{item.GenPerformance.problemSolving}/10</span>
        </p>
        <p>
          Innovation <span>{item.GenPerformance.Innovation}/10</span>
        </p>
        <p>
          Quality Work <span>{item.GenPerformance.QualityWork}/10</span>
        </p>
        <p>
          Timeliness <span>{item.GenPerformance.Timeliness}/10</span>
        </p>
      </div>
      <div>
        <h1>Proffessionalism</h1>
        <p>
          Attendance <span>{item.Proffessionalism.Attendance}/10</span>
        </p>
        <p>
          Adaptability <span>{item.Proffessionalism.Adaptability}/10</span>
        </p>
        <p>
          ProfessionalConduct{" "}
          <span>{item.Proffessionalism.ProffessionalConduct}/10</span>
        </p>
      </div>
      <div>
        <h1>Skill Development</h1>
        <p>
          Technical Skills:{" "}
          <span>{item.SkillDevelopment.TechnicalSkills}/10</span>
        </p>
        <p>
          Soft Skills <span>{item.SkillDevelopment.SoftSkills}/10</span>
        </p>
      </div>
      <p>{item.Remark}</p>
    </div>
  );
}

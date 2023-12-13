/* eslint-disable react/prop-types */
import { useState } from "react";
import ScoreDetail from "./ScoreDetail";

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
    <div className=" mr-2">
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
      className={` ${num === activeTab && "bg-white"}  bg-slate-300 px-4`}
    >
      {children}
    </button>
  );
}

function TabbedContent({ num, Assessment }) {
  const item = Assessment.at(num);
  return (
    <div className="bg-white px-4 py-2">
      <div>
        <h1>General Performance</h1>
        <div className="p-4">
          <ScoreDetail
            label="Problem Solving"
            grade={item.GenPerformance.problemSolving}
          />
          <ScoreDetail
            label="Innovation"
            grade={item.GenPerformance.Innovation}
          />
          <ScoreDetail
            label="Quality Work"
            grade={item.GenPerformance.QualityWork}
          />
          <ScoreDetail
            label="Timeliness"
            grade={item.GenPerformance.Timeliness}
          />
        </div>
      </div>
      <div>
        <h1>Proffessionalism</h1>
        <div className="p-4">
          <ScoreDetail
            label="Attendance"
            grade={item.Proffessionalism.Attendance}
          />
          <ScoreDetail
            label="Adaptability"
            grade={item.Proffessionalism.ProffessionalConduct}
          />
          <ScoreDetail
            label="ProfessionalConduct"
            grade={item.Proffessionalism.Adaptability}
          />
        </div>
      </div>
      <div>
        <h1>Skill Development</h1>
        <div className="p-4">
          <p>
            Technical Skills:
            <li>Computer repaire</li>
            <li>Cripping Cable</li>
          </p>
          <p>
            Soft Skills:
            <li>React.Js</li>
            <li>Cripping Cable</li>
          </p>
        </div>
      </div>
      <div>
        <h1>Remark</h1>
        <p className="p-4">{item.Remark}</p>
      </div>
    </div>
  );
}

import ScoreDetail from "./ScoreDetail";

/* eslint-disable react/prop-types */
export default function TabContent({ num, Assessment }) {
  const item = Assessment.at(num);
  return (
    <div className="bg-white px-4 py-2">
      <div>
        <h1 className="font-bold ">General Performance</h1>
        <div className="px-4 py-2">
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
        <h1 className="font-bold ">Proffessionalism</h1>
        <div className="px-4 py-2">
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
        <h1 className="font-bold ">Skill Development</h1>
        <div className="px-4 py-2">
          <div>
            <p className="font-semibold ">Technical Skills:</p>
            <li>Computer repaire</li>
            <li>Cripping Cable</li>
          </div>
          <div>
            <p className="font-semibold ">Soft Skills:</p>

            <li>React.Js</li>
            <li>Cripping Cable</li>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold ">Remark</h1>
        <p className="px-4 py-2">{item.Remark}</p>
      </div>
    </div>
  );
}

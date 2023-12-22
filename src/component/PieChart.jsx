/* eslint-disable react/prop-types */
import { Pie } from "react-chartjs-2";

export default function PieChart({ label, data }) {
  return (
    <div className="max-w-[14rem] bg-slate-50 text-center">
      <h1>{label}</h1>
      <Pie data={data} />
    </div>
  );
}

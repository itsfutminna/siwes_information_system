// import PieChart from "../component/PieChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import PieChart from "../component/PieChart";

export default function dashboard() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const pieChartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Total",
        data: [30, 9],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-8 ">
        <div className="flex flex-col items-center bg-slate-50 p-4 shadow-md shadow-Futpurple">
          <i className="fa fa-graduation-cap"></i>
          <hi>IT students</hi>
          <p className="font-bold">173</p>
        </div>
        <div className="flex flex-col items-center bg-slate-50 p-4 shadow-md shadow-Futpurple">
          <i className="fa fa-graduation-cap"></i>
          <hi>MIS Students</hi>
          <p className="font-bold">51</p>
        </div>
        <div className="flex flex-col items-center bg-slate-50 p-4 shadow-md shadow-Futpurple">
          <i className="fa fa-graduation-cap"></i>
          <hi>Networking Students</hi>
          <p className="font-bold">83</p>
        </div>
        <div className="flex flex-col items-center bg-slate-50 p-4 shadow-md shadow-Futpurple">
          <i className="fa fa-graduation-cap"></i>
          <hi>Nitdah Students</hi>
          <p className="font-bold">73</p>
        </div>
      </div>
      <PieChart label="IT students by Gender" data={pieChartData} />;
    </div>
  );
}

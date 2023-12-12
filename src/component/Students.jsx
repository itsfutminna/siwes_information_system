import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Student(key) {
  const navigate = useNavigate();

  function handleAssesment() {
    console.log("working");
    navigate("profile");
  }
  return (
    <div
      key={key}
      className="flex  justify-between  bg-slate-50 rounded-md p-2"
    >
      <div className="flex gap-4 items-center">
        <img
          src="/happy.jpg"
          alt="student"
          className="h-12 w-12 rounded-full aspect-square"
        />
        <div className="flex flex-col justify-center ">
          <p className="text-Futpurple font-bold">Happy Adaga</p>
          <p className="text-[0.7rem]">2018/1/99999</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-white">
        <NavLink to="profile" className="bg-PrimaryColor px-2 rounded-lg">
          Assessment
        </NavLink>
        <button
          onClick={() => handleAssesment()}
          className="bg-PrimaryColor px-2 rounded-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
}

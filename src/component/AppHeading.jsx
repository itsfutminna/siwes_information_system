import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
export default function AppHeading() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-between bg-Newpurple  h-16 px-8 border-b-4 border-slate-950">
      <NavLink to="/">
        <img src={logo} alt="FUT-logo" className="max-w-[7rem]" />
      </NavLink>
      <div className="flex items-center gap-2">
        <img
          src="/happy.jpg"
          alt="staff-image"
          className="h-11 w-11 aspect-sqaure rounded-full"
        />
        <p>Staff name</p>
        <button
          onClick={() => handleLogout()}
          className="bg-PrimaryColor text-slate-100 font-bold px-4 py-1 rounded-full ml-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

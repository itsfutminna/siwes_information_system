import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <nav className="bg-purple-200 sticky top-0">
      <div className="w-10/12 mx-auto">
        <div className="flex items-center justify-between py-1">
          <img src={logo} alt="Logo" className="max-w-[12rem]" />
          {/* <NavLink to="app">App</NavLink> */}
          <NavLink className="hover:text-purple-700" to="about">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

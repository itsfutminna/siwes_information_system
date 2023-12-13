import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {
  const [active, setActive] = useState(0);

  return (
    <aside className="flex flex-col items-center justify-center gap-8 basis-48 shrink-0 bg-purple-900 px-4 text-slate-50">
      <NavLink
        className={`px-3 py-1 rounded-lg w-full text-center ${
          active === 0 ? "bg-slate-50 text-purple-950" : null
        }`}
        num={0}
        onClick={() => setActive(0)}
        to="dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={`px-3 py-1 rounded-lg w-full text-center ${
          active === 1 ? "bg-slate-50 text-purple-950" : null
        }`}
        num={1}
        onClick={() => setActive(1)}
        to="biodata"
      >
        Biodata
      </NavLink>
      <NavLink
        className={`px-3 py-1 rounded-lg  w-full text-center ${
          active === 2 ? "bg-slate-50 text-purple-950" : null
        }`}
        num={2}
        onClick={() => setActive(2)}
        to="assesment"
      >
        Assessment
      </NavLink>
    </aside>
  );
}

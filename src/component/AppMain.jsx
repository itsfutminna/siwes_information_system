import { Outlet } from "react-router-dom";

export default function AppMain() {
  return (
    <main className=" w-full bg-Newpurple">
      <Outlet />
    </main>
  );
}

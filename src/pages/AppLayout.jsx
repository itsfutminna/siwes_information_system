// import { useEffect } from "react";
import AppHeading from "../component/AppHeading";
import AppMain from "../component/AppMain";
import AppSidebar from "../component/AppSidebar";
// import { useNavigate } from "react-router-dom";

export default function AppLayout() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("dashboard");
  // }, []);
  return (
    <div className="flex flex-col h-screen ">
      <AppHeading />
      <div className="flex h-full ">
        <AppSidebar />
        <AppMain />
      </div>
    </div>
  );
}

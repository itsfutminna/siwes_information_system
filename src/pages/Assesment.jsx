// import { NavLink, Outlet } from "react-router-dom";
import SearchBar from "../component/SearchBar";
import Students from "../component/Students";
export default function Assesment() {
  // const navigate = useNavigate();
  // function handleB() {
  //   navigate("profile");
  // }
  return (
    <div className="flex flex-col gap-3  p-3 ">
      <SearchBar />
      <div className="h-[31rem] overflow-y-auto  flex flex-col   gap-2 pr-2 mt-4 ">
        {Array.from({ length: 12 }, (_, i) => (
          <Students key={i} />
        ))}
      </div>
      {/* <NavLink to="profile">test</NavLink> */}
      {/* <Outlet /> */}
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import Biodata from "./pages/Biodata";
import Assesment from "./pages/Assesment";
import StudentProfile from "./pages/StudentProfile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="biodata" element={<Biodata />} />
          <Route path="assesment" element={<Assesment />} />
          <Route path="assesment/profile" element={<StudentProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

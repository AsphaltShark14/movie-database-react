import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

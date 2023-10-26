import { Outlet } from "react-router-dom";
import { Navbar } from "../modules/Navbar/Navbar";

export const Layout = () => {
  return (
    <div className="flex w-screen h-screen flex-col-reverse md:flex-row">
      <Navbar />
      <main className="w-full max-w-full overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

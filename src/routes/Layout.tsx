import { Link, Outlet } from "react-router-dom";
import { paths } from "../utils/paths";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={paths.index}>Home</Link>
          </li>
          <li>
            <Link to={paths.movies}>Movies</Link>
          </li>
          <li>
            <Link to={paths.tv}>TV</Link>
          </li>
          <li>
            <Link to={paths.search}>Search</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

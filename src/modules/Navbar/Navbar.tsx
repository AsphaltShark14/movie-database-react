import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import Heart from "~/media/heart.svg";
import Home from "~/media/home.svg";
import Movie from "~/media/movie.svg";
import Search from "~/media/search.svg";
import Tv from "~/media/tv.svg";
import { paths } from "../../utils/paths";

export const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="bg-black px-4 py-8 text-black">
      <ul className="flex justify-around gap-10 md:w-10 md:flex-col md:justify-start">
        <li
          className={clsx("flex justify-center hover:opacity-80", {
            "scale-125": location.pathname === "/",
          })}
        >
          <Link to={paths.index}>
            <img alt="home" src={Home} aria-label="home" className="h-6 w-6" />
          </Link>
        </li>
        <li
          className={clsx("flex justify-center hover:opacity-80", {
            "scale-125": location.pathname.includes("movie"),
          })}
        >
          <Link to={paths.movies}>
            <img
              alt="movie"
              src={Movie}
              aria-label="Movies"
              className="h-6 w-6"
            />
          </Link>
        </li>
        <li
          className={clsx("flex justify-center hover:opacity-80", {
            "scale-125": location.pathname.includes("tv"),
          })}
        >
          <Link to={paths.tv}>
            <img alt="tv" src={Tv} aria-label="tv" className="h-6 w-6" />
          </Link>
        </li>
        <li
          className={clsx("flex justify-center hover:opacity-80", {
            "scale-125": location.pathname.includes("search"),
          })}
        >
          <Link to={paths.search}>
            <img
              alt="search"
              src={Search}
              aria-label="search"
              className="h-6 w-6"
            />
          </Link>
        </li>
        <li
          className={clsx("flex justify-center hover:opacity-80", {
            "scale-125": location.pathname.includes("likes"),
          })}
        >
          <Link to={paths.likes}>
            <img
              alt="likes"
              src={Heart}
              aria-label="likes"
              className="h-6 w-6"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

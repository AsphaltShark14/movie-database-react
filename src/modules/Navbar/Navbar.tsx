import Home from "~/media/home.svg";
import Movie from "~/media/movie.svg";
import Search from "~/media/search.svg";
import Tv from "~/media/tv.svg";
import { paths } from "~/utils/paths";

export const Navbar = () => {
  return (
    <nav className="bg-black px-4 py-8 text-black">
      <ul className="flex flex-wrap content-center justify-around gap-10 md:w-10 md:flex-col md:justify-start">
        <li className="hover:opacity-80">
          <a href={paths.index}>
            <img alt="home" src={Home} aria-label="home" className="h-6 w-6" />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.movies}>
            <img
              alt="movie"
              src={Movie}
              aria-label="Movies"
              className="h-6 w-6"
            />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.tv}>
            <img alt="tv" src={Tv} aria-label="tv" className="h-6 w-6" />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.search}>
            <img
              alt="search"
              src={Search}
              aria-label="search"
              className="h-6 w-6"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

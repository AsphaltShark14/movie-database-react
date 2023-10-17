import Home from "../../media/resources/home.svg";
import Movie from "../../media/resources/movie.svg";
import Search from "../../media/resources/search.svg";
import Tv from "../../media/resources/tv.svg";
import { paths } from "../../utils/paths";

export const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-8 text-black">
      <ul className="flex justify-around gap-10 md:w-10 md:flex-col md:justify-start">
        <li className="hover:opacity-80">
          <a href={paths.index}>
            <img alt="home" src={Home} aria-label="home" className="h-8 w-8" />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.movies}>
            <img
              alt="movie"
              src={Movie}
              aria-label="Movies"
              className="h-8 w-8"
            />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.tv}>
            <img alt="tv" src={Tv} aria-label="tv" className="h-8 w-8" />
          </a>
        </li>
        <li className="hover:opacity-80">
          <a href={paths.search}>
            <img
              alt="search"
              src={Search}
              aria-label="search"
              className="h-8 w-8"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

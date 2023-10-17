import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { getMovieGenres, getMovieGenresQueryKey } from "../../services/tmdb";
import { paths } from "../../utils/paths";

export const Root = () => {
  const query = useQuery({
    queryFn: getMovieGenres,
    queryKey: getMovieGenresQueryKey(),
  });

  console.log(query.data);

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

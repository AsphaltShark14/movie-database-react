import { useQuery } from "react-query";
import { getMovieGenres, getMovieGenresQueryKey } from "../../services/tmdb";

export const Root = () => {
  const query = useQuery({
    queryFn: getMovieGenres,
    queryKey: getMovieGenresQueryKey(),
  });

  console.log(query.data);

  return <div>Root</div>;
};

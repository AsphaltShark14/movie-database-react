import { useQuery } from "react-query";
import { Footer } from "../../modules/Footer/Footer";
import { getMovieGenres, getMovieGenresQueryKey } from "../../services/tmdb";

export const Root = () => {
  const query = useQuery({
    queryFn: getMovieGenres,
    queryKey: getMovieGenresQueryKey(),
  });

  console.log(query.data);

  return (
    <div>
      <p>Root</p>
      <Footer />
    </div>
  );
};

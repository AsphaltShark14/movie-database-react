import { useQuery } from "react-query";
import { MovieHero } from "~/modules/MovieHero/MovieHero";
import { Footer } from "../modules/Footer/Footer";
import { getTrendingMovies, getTrendingMoviesQueryKey } from "../services/tmdb";

export const Root = () => {
  const query = useQuery({
    queryFn: getTrendingMovies,
    queryKey: getTrendingMoviesQueryKey(),
  });

  console.log(query.data);

  if (!query.data?.results) {
    return <div>No data</div>;
  }

  return (
    <div>
      <MovieHero media={query.data?.results[0]} />
      <Footer />
    </div>
  );
};

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Footer } from "../modules/Footer/Footer";
import { MediaCarousel } from "../modules/MediaCarousel/MediaCarousel";
import { MovieHero } from "../modules/MovieHero/MovieHero";
import { TvSeriesHero } from "../modules/TvSeriesHero/TvSeriesHero";
import {
  getRandomHeroMedia,
  getTrendingMovies,
  getTrendingMoviesQueryKey,
  getTrendingTvSeries,
  getTrendingTvSeriesQueryKey,
} from "../services/tmdb";
import { MovieBase, TvBase } from "../services/types";
import { paths } from "../utils/paths";

export const Root = () => {
  const movieQuery = useQuery({
    queryFn: getTrendingMovies,
    queryKey: getTrendingMoviesQueryKey(),
    refetchOnWindowFocus: false,
  });

  const tvQuery = useQuery({
    queryFn: getTrendingTvSeries,
    queryKey: getTrendingTvSeriesQueryKey(),
    refetchOnWindowFocus: false,
  });

  const [movies, tvSeries] = [movieQuery.data, tvQuery.data];

  if (!movies || !tvSeries) {
    return <div>Loading...</div>;
  }

  const random = getRandomHeroMedia<MovieBase | TvBase>({
    collections: [movies, tvSeries],
  });

  return (
    <div>
      {random.media_type === "movie" ? (
        <Link to={paths.media("movie", random.id)}>
          <MovieHero media={random} />
        </Link>
      ) : null}
      {random.media_type === "tv" ? (
        <Link to={paths.media("tv", random.id)}>
          <TvSeriesHero media={random} />
        </Link>
      ) : null}
      {movies.results ? (
        <MediaCarousel
          collection={movies.results}
          title="Trending Movies"
          href={paths.movieCategory("trending")}
        />
      ) : null}
      {tvSeries.results ? (
        <MediaCarousel
          collection={tvSeries.results}
          title="Trending TV Series"
          href={paths.tvCategory("trending")}
        />
      ) : null}
      <Footer />
    </div>
  );
};

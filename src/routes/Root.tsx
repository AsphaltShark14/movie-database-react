import { useQuery } from "react-query";
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
      {random.media_type === "movie" ? <MovieHero media={random} /> : null}
      {random.media_type === "tv" ? <TvSeriesHero media={random} /> : null}
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

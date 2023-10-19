import { useQuery } from "react-query";
import { Footer } from "../../modules/Footer/Footer";
import { MediaCarousel } from "../../modules/MediaCarousel/MediaCarousel";
import { MovieHero } from "../../modules/MovieHero/MovieHero";
import {
  getMovies,
  getMoviesQueryKey,
  getRandomHeroMedia,
} from "../../services/tmdb";
import { getListItem } from "../../utils/format";
import { paths } from "../../utils/paths";

export const Movie = () => {
  const popularQuery = useQuery({
    queryFn: getMovies,
    queryKey: getMoviesQueryKey({ query: "popular" }),
    refetchOnWindowFocus: false,
  });
  const topRatedQuery = useQuery({
    queryFn: getMovies,
    queryKey: getMoviesQueryKey({ query: "top_rated" }),
    refetchOnWindowFocus: false,
  });
  const nowPlayingQuery = useQuery({
    queryFn: getMovies,
    queryKey: getMoviesQueryKey({ query: "now_playing" }),
    refetchOnWindowFocus: false,
  });

  if (!popularQuery.data || !topRatedQuery.data || !nowPlayingQuery.data) {
    return <div>Loading...</div>;
  }

  const [popular, topRated, nowPlaying] = [
    popularQuery.data,
    topRatedQuery.data,
    nowPlayingQuery.data,
  ];

  const random = getRandomHeroMedia({
    collections: [popular, topRated, nowPlaying],
  });

  return (
    <div className="flex max-h-screen flex-col gap-4 overflow-y-scroll">
      {random ? (
        <a href={paths.media("movie", random.id)}>
          <MovieHero media={random} />
        </a>
      ) : null}
      <MediaCarousel
        collection={popular?.results || []}
        title={getListItem({ query: "popular", type: "movie" })}
        href={paths.movieCategory("popular")}
      />
      <MediaCarousel
        collection={topRated?.results || []}
        title={getListItem({ query: "top_rated", type: "movie" })}
        href={paths.movieCategory("top_rated")}
      />
      <MediaCarousel
        collection={nowPlaying?.results || []}
        title={getListItem({ query: "now_playing", type: "movie" })}
        href={paths.movieCategory("now_playing")}
      />
      <Footer />
    </div>
  );
};

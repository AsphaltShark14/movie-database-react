import { MovieInfo } from "../../../../modules/MovieInfo/MovieInfo";
import { PeopleCarousel } from "../../../../modules/PeopleCarousel/PeopleCarousel";
import { useMovieQuery } from "../Movie.utils";

export const Overview = () => {
  const query = useMovieQuery();

  const movie = query.data;

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <MovieInfo media={movie} />
      <PeopleCarousel collection={movie.credits?.cast || []} title="Cast" />
    </div>
  );
};

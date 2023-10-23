import { MovieInfo } from "../../../modules/MovieInfo/MovieInfo";
import { PeopleCarousel } from "../../../modules/PeopleCarousel/PeopleCarousel";
import { TvSeriesHero } from "../../../modules/TvSeriesHero/TvSeriesHero";
import { useTvShowQuery } from "./TvShow.utils";

export const TvShow = () => {
  const query = useTvShowQuery();

  const tvShow = query.data;

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <TvSeriesHero media={tvShow} isDescription={false} />
      <MovieInfo media={tvShow} />
      <PeopleCarousel collection={tvShow.credits?.cast || []} title="Cast" />
    </div>
  );
};

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Footer } from "../../modules/Footer/Footer";
import { MediaCarousel } from "../../modules/MediaCarousel/MediaCarousel";
import { TvSeriesHero } from "../../modules/TvSeriesHero/TvSeriesHero";
import {
  getRandomHeroMedia,
  getTvSeries,
  getTvSeriesQueryKey,
} from "../../services/tmdb";
import { getListItem } from "../../utils/format";
import { paths } from "../../utils/paths";

export const TvSeries = () => {
  const popularQuery = useQuery({
    queryFn: getTvSeries,
    queryKey: getTvSeriesQueryKey({ query: "popular" }),
    refetchOnWindowFocus: false,
  });
  const topRatedQuery = useQuery({
    queryFn: getTvSeries,
    queryKey: getTvSeriesQueryKey({ query: "top_rated" }),
    refetchOnWindowFocus: false,
  });
  const onTheAirQuery = useQuery({
    queryFn: getTvSeries,
    queryKey: getTvSeriesQueryKey({ query: "on_the_air" }),
    refetchOnWindowFocus: false,
  });
  const airingTodayQuery = useQuery({
    queryFn: getTvSeries,
    queryKey: getTvSeriesQueryKey({ query: "airing_today" }),
    refetchOnWindowFocus: false,
  });

  if (
    !popularQuery.data ||
    !onTheAirQuery.data ||
    !airingTodayQuery.data ||
    !topRatedQuery.data
  ) {
    return <div>Loading...</div>;
  }

  const [popular, onTheAir, airingToday, topRated] = [
    popularQuery.data,
    onTheAirQuery.data,
    airingTodayQuery.data,
    topRatedQuery.data,
  ];

  const random = getRandomHeroMedia({
    collections: [popular, onTheAir, airingToday, topRated],
  });

  return (
    <div className="flex max-h-screen flex-col gap-4 overflow-y-scroll">
      {random ? (
        <Link to={paths.media("tv", random.id)}>
          <TvSeriesHero media={random} />
        </Link>
      ) : null}
      <MediaCarousel
        collection={airingToday?.results || []}
        title={getListItem({ query: "airing_today", type: "tv" })}
        href={paths.tvCategory("airing_today")}
      />
      <MediaCarousel
        collection={onTheAir?.results || []}
        title={getListItem({ query: "on_the_air", type: "tv" })}
        href={paths.tvCategory("on_the_air")}
      />
      <MediaCarousel
        collection={popular?.results || []}
        title={getListItem({ query: "popular", type: "tv" })}
        href={paths.tvCategory("popular")}
      />
      <MediaCarousel
        collection={topRated?.results || []}
        title={getListItem({ query: "top_rated", type: "tv" })}
        href={paths.tvCategory("top_rated")}
      />
      <Footer />
    </div>
  );
};

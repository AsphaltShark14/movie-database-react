import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import {
  getTrendingTvSeries,
  getTrendingTvSeriesQueryKey,
  getTvSeries,
  getTvSeriesQueryKey,
} from "../../../services/tmdb";

export const useTvSeriesCategoryFeed = () => {
  const params = useParams();

  const parseResult = safeParse(object({ category: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const category = parseResult.output.category;

  if (category === "trending") {
    const query = useQuery({
      queryFn: getTrendingTvSeries,
      queryKey: getTrendingTvSeriesQueryKey(),
      refetchOnWindowFocus: false,
    });

    return query;
  }

  const query = useInfiniteQuery({
    queryFn: getTvSeries,
    queryKey: getTvSeriesQueryKey({ query: category }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.page) {
        return;
      }

      return lastPage.page + 1;
    },
    refetchOnWindowFocus: false,
  });

  return query;
};

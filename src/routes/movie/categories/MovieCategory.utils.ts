import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import {
  getMovies,
  getMoviesQueryKey,
  getTrendingMovies,
  getTrendingMoviesQueryKey,
} from "../../../services/tmdb";

export const useMovieCategoryFeed = () => {
  const params = useParams();

  const parseResult = safeParse(object({ category: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const category = parseResult.output.category;

  if (category === "trending") {
    const query = useQuery({
      queryFn: getTrendingMovies,
      queryKey: getTrendingMoviesQueryKey(),
    });

    return query;
  }

  const query = useInfiniteQuery({
    queryFn: getMovies,
    queryKey: getMoviesQueryKey({ query: category }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.page) {
        return;
      }

      return lastPage.page + 1;
    },
  });

  return query;
};

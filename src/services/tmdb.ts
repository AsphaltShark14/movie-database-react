import { QueryFunction } from "react-query";
import { jsonFetcher } from "./fetcher";
import { Collection, Genre, MediaBase, MovieBase, TvBase } from "./types";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const getMovieGenresQueryKey = () => {
  return ["genres"] as const;
};

export const getMovieGenres: QueryFunction<
  Genre[],
  ReturnType<typeof getMovieGenresQueryKey>
> = () => {
  return jsonFetcher<Genre[]>({
    path: `/genre/movie/list`,
    query: {
      api_key: apiKey,
    },
  });
};

export const getTrendingMoviesQueryKey = () => {
  return ["trendingMovies"] as const;
};

export const getTrendingMovies: QueryFunction<
  Collection<MovieBase>,
  ReturnType<typeof getTrendingMoviesQueryKey>
> = () => {
  return jsonFetcher<Collection<MovieBase>>({
    path: `/trending/movie/week`,
    query: {
      api_key: apiKey,
    },
  });
};

export const getTrendingTvSeriesQueryKey = () => {
  return ["trendingTvSeries"] as const;
};

export const getTrendingTvSeries: QueryFunction<
  Collection<TvBase>,
  ReturnType<typeof getTrendingTvSeriesQueryKey>
> = () => {
  return jsonFetcher<Collection<TvBase>>({
    path: `/trending/tv/week`,
    query: {
      api_key: apiKey,
    },
  });
};

type GetRandomHeroMediaArgs<T> = {
  collections: Collection<T>[];
};

export const getRandomHeroMedia = <T>({
  collections,
}: GetRandomHeroMediaArgs<T>) => {
  const items = collections.flatMap((collection) => collection.results || []);
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return randomItem;
};

type GetSearchResultArgs = {
  query: string;
  isAdult?: boolean;
};

export const getSearchResultsQueryKey = (args: GetSearchResultArgs) => {
  return ["searchResults", args] as const;
};

export const getSearchResults: QueryFunction<
  Collection<MediaBase>,
  ReturnType<typeof getSearchResultsQueryKey>
> = ({ queryKey: [, args], pageParam = 1 }) => {
  return jsonFetcher<Collection<MediaBase>>({
    path: `/search/multi`,
    query: {
      query: args.query,
      include_adult: args.isAdult,
      page: pageParam,
      api_key: apiKey,
    },
  });
};

type GetMoviesArgs = {
  query: string;
};

export const getMoviesQueryKey = (args: GetMoviesArgs) => {
  return ["movies", args] as const;
};

export const getMovies: QueryFunction<
  Collection<MovieBase>,
  ReturnType<typeof getMoviesQueryKey>
> = async ({ queryKey: [, args], pageParam = 1 }) => {
  const result = await jsonFetcher<Collection<MovieBase>>({
    path: `/movie/${args.query}`,
    query: {
      api_key: apiKey,
      page: pageParam,
    },
  });
  const results = result.results?.map((item) => ({
    ...item,
    media_type: "movie" as const,
  }));
  return { ...result, results };
};

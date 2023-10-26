import { QueryFunction } from "react-query";
import { jsonFetcher } from "./fetcher";
import {
  Collection,
  Genre,
  MediaBase,
  MovieBase,
  MovieExtraDetails,
  PersonDetails,
  TvBase,
  TvExtraDetails,
} from "./types";

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

type GetTvSeriesArgs = {
  query: string;
};

export const getTvSeriesQueryKey = (args: GetTvSeriesArgs) => {
  return ["tvSeries", args] as const;
};

export const getTvSeries: QueryFunction<
  Collection<TvBase>,
  ReturnType<typeof getTvSeriesQueryKey>
> = async ({ queryKey: [, args], pageParam = 1 }) => {
  const result = await jsonFetcher<Collection<TvBase>>({
    path: `/tv/${args.query}`,
    query: {
      api_key: apiKey,
      page: pageParam,
    },
  });

  const results = result.results?.map((item) => ({
    ...item,
    media_type: "tv" as const,
  }));

  return { ...result, results };
};

type GetMovieArgs = {
  id: string;
};

export const getMovieQueryKey = (args: GetMovieArgs) => {
  return ["movie", args] as const;
};

export const getMovie: QueryFunction<
  MovieExtraDetails,
  ReturnType<typeof getMovieQueryKey>
> = async ({ queryKey: [, args] }) => {
  const result = await jsonFetcher<MovieExtraDetails>({
    path: `/movie/${args.id}`,
    query: {
      api_key: apiKey,
      append_to_response: "videos,credits,images,external_ids",
      include_image_language: "en",
    },
  });
  return { ...result, media_type: "movie" as const };
};

type GetTvShowArgs = {
  id: string;
};

export const getTvShowQueryKey = (args: GetTvShowArgs) => {
  return ["tvshow", args] as const;
};

export const getTvShow: QueryFunction<
  TvExtraDetails,
  ReturnType<typeof getTvShowQueryKey>
> = async ({ queryKey: [, args] }) => {
  const result = await jsonFetcher<TvExtraDetails>({
    path: `/tv/${args.id}`,
    query: {
      api_key: apiKey,
      append_to_response: "credits,external_ids",
      include_image_language: "en",
    },
  });

  return { ...result, media_type: "tv" as const };
};

type getPersonArgs = {
  id: string;
};

export const getPersonQueryKey = (args: getPersonArgs) => {
  return ["person", args] as const;
};

export const getPerson: QueryFunction<
  PersonDetails,
  ReturnType<typeof getPersonQueryKey>
> = async ({ queryKey: [, args] }) => {
  const result = await jsonFetcher<PersonDetails>({
    path: `/person/${args.id}`,
    query: {
      api_key: apiKey,
      append_to_response: "combined_credits,external_ids",
      include_image_language: "en",
    },
  });

  return { ...result, media_type: "person" };
};

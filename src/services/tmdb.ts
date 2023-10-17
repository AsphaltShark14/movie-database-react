import { QueryFunction } from "react-query";
import { jsonFetcher } from "./fetcher";

type MovieGenre = {
    id: number;
    name: string;
}

export const getMovieGenresQueryKey = () => {
    return ['genres'] as const;
}

export const getMovieGenres: QueryFunction<MovieGenre[], ReturnType<typeof getMovieGenresQueryKey>> = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    return jsonFetcher<MovieGenre[]>({
        path: `/genre/movie/list`,
        query: {
            api_key: apiKey,
        },
    })
}
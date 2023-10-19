import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import { getMovie, getMovieQueryKey } from "../../../services/tmdb";

export const useMovieQuery = () => {
  const params = useParams();

  const parseResult = safeParse(object({ movieId: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const query = useQuery({
    queryFn: getMovie,
    queryKey: getMovieQueryKey({ id: parseResult.output.movieId }),
  });

  return query;
};

import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import { getTvShow, getTvShowQueryKey } from "../../../services/tmdb";

export const useTvShowQuery = () => {
  const params = useParams();

  const parseResult = safeParse(object({ tvId: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const query = useQuery({
    queryFn: getTvShow,
    queryKey: getTvShowQueryKey({ id: parseResult.output.tvId }),
  });

  return query;
};

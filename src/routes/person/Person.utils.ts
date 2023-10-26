import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import { getPerson, getPersonQueryKey } from "../../services/tmdb";

export const usePersonDetails = () => {
  const params = useParams();

  const parseResult = safeParse(object({ personId: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const query = useQuery({
    queryFn: getPerson,
    queryKey: getPersonQueryKey({ id: parseResult.output.personId }),
    refetchOnWindowFocus: false,
  });

  return query;
};

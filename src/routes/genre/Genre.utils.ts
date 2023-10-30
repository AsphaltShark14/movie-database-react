import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { object, safeParse, string } from "valibot";
import {
  getMediaByGenre,
  getMediaByGenreQueryKey,
} from "../../services/tmdb";
import { MediaBase } from "../../services/types";

export const useMediaGenre = (media: MediaBase["media_type"]) => {
  const params = useParams();

  const parseResult = safeParse(object({ id: string() }), params);

  if (!parseResult.success) {
    throw console.warn(parseResult.issues);
  }

  const query = useInfiniteQuery({
    queryFn: getMediaByGenre,
    queryKey: getMediaByGenreQueryKey({
      media,
      genre: parseResult.output.id,
    }),
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

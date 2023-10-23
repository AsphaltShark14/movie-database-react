import { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MediaGrid } from "../../../modules/MediaGrid/MediaGrid";
import { getListItem } from "../../../utils/format";
import { useMovieCategoryFeed } from "./MovieCategory.utils";

export const MovieCategory = () => {
  const query = useMovieCategoryFeed();
  const params = useParams();

  console.log(query.data);

  const collection = useMemo(() => {
    if (!query.data) {
      return [];
    }

    if ("pages" in query.data) {
      const flatQuery = query.data.pages.flatMap((page) =>
        page.results ? page.results : []
      );

      return flatQuery;
    }

    if (!query.data.results) {
      return [];
    }

    return query.data.results;
  }, [query.data]);

  const onEndReached = useCallback((atBottom: boolean) => {
    if (atBottom && "fetchNextPage" in query) {
      query.fetchNextPage();
    }
  }, []);

  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <h1 className="px-8 pt-4 text-4xl">
        {getListItem({ query: params.name, type: "movie" })}
      </h1>
      <div>
        <MediaGrid collection={collection} onEndReached={onEndReached} />
      </div>
    </div>
  );
};

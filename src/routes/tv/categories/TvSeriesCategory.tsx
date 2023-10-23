import { useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MediaGrid } from "../../../modules/MediaGrid/MediaGrid";
import { getListItem } from "../../../utils/format";
import { useTvSeriesCategoryFeed } from "./TvSeriesCategory.utils";

export const TvSeriesCategory = () => {
  const query = useTvSeriesCategoryFeed();
  const params = useParams();

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
      <h1 className="px-8 py-4 text-4xl">
        {getListItem({ query: params.category, type: "tv" })}
      </h1>
      <div>
        <MediaGrid collection={collection} onEndReached={onEndReached} />
      </div>
    </div>
  );
};

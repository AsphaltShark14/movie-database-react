import { useCallback, useMemo } from "react";
import { MediaGrid } from "../../../modules/MediaGrid/MediaGrid";
import { useMediaGenre } from "../Genre.utils";

export const MovieGenre = () => {
  const query = useMediaGenre("movie");

  const collection = useMemo(() => {
    if (!query.data) {
      return [];
    }

    const flatQuery = query.data.pages.flatMap((page) =>
      page.results ? page.results : []
    );

    return flatQuery;
  }, [query.data]);

  const onEndReached = useCallback((atBottom: boolean) => {
    if (atBottom && "fetchNextPage" in query) {
      query.fetchNextPage();
    }
  }, []);

  return (
    <div className="flex max-h-screen flex-col overflow-y-scroll">
      <h1 className="px-8 py-4 text-4xl">
        {`Movie Genre: ${query.data?.pages[0].genre?.name || "Not defined"}`}
      </h1>
      <div>
        <MediaGrid collection={collection} onEndReached={onEndReached} />
      </div>
    </div>
  );
};

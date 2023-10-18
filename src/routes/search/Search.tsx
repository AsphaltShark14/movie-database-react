import { useVirtualizer } from "@tanstack/react-virtual";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { MediaCard } from "../../components/MediaCard/MediaCard";
import SearchIcon from "../../media/search.svg";
import {
  getSearchResults,
  getSearchResultsQueryKey,
} from "../../services/tmdb";

export const Search = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const changeValue = event.currentTarget.value;

    setValue(changeValue);
  };

  const [debouncedValue] = useDebounce(value, 250);

  const query = useInfiniteQuery({
    queryFn: getSearchResults,
    queryKey: getSearchResultsQueryKey({
      query: debouncedValue,
    }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.page) {
        return;
      }

      return lastPage.page + 1;
    },
    enabled: !!debouncedValue,
  });

  const collection = useMemo(() => {
    return query.data ? query.data.pages.flatMap((page) => page.results) : [];
  }, [query.data]);

  const rowVirualizer = useVirtualizer({
    count: query.hasNextPage ? collection.length + 1 : collection.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => 100,
    overscan: 5,
    horizontal: true,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirualizer.getVirtualItems().reverse()];

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= collection.length - 1 &&
      query.hasNextPage &&
      !query.isFetchingNextPage
    ) {
      query.fetchNextPage();
    }
  }, [
    query.hasNextPage,
    query.fetchNextPage,
    collection.length,
    query.isFetchingNextPage,
    rowVirualizer.getVirtualItems(),
  ]);

  console.log(query.data);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex max-h-screen flex-col">
      <form className="flex flex-row justify-start content-center gap-4 bg-base-300 p-4">
        <div className="my-auto">
          <img
            src={SearchIcon}
            alt="search"
            aria-label="Search"
            className="w-6 h-6"
          />
        </div>
        <input
          aria-label="query"
          className="input w-72 rounded-md p-3"
          id="query"
          name="query"
          value={value}
          onChange={onChange}
        />
        <button className="btn border-2 border-gray-100" type="submit">
          Search
        </button>
      </form>
      <div className="flex flex-col h-100 overflow-y-scroll" ref={containerRef}>
        <section>
          <div
            style={{
              height: `${rowVirualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {rowVirualizer.getVirtualItems().map((virtualRow) => {
              const isLoaderRow = virtualRow.index > collection.length - 1;
              const card = collection[virtualRow.index];

              return <MediaCard key={virtualRow.index} media={card} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

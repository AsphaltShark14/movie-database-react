import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useDebounce } from "use-debounce";
import SearchIcon from "../../media/search.svg";
import { MediaGrid } from "../../modules/MediaGrid/MediaGrid";
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
    if (!query.data) {
      return [];
    }

    const flatQuery = query.data.pages.flatMap((page) =>
      page.results ? page.results : []
    );
    return flatQuery;
  }, [query.data]);

  const onEndReached = useCallback((atBottom: boolean) => {
    if (atBottom) {
      query.fetchNextPage();
    }
  }, []);

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
      <MediaGrid collection={collection} onEndReached={onEndReached} />
    </div>
  );
};

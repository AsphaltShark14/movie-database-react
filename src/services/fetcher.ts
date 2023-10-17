/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

type FetcherArgs = {
  init?: RequestInit;
  path: string;
  query?: Record<string, any>;
  token?: string;
};

export const buildSearchParams = (query?: FetcherArgs['query']): URLSearchParams => {
  const entries = Object.entries(query || {});
  const pairs = entries.flatMap(([key, value]) => {
    if (value === undefined || value === null) {
      return [];
    }
    if (Array.isArray(value)) {
      return value.map((entry) => [`${key}[]`, `${entry}`]);
    }
    return [[key, `${value}`]];
  });
  return new URLSearchParams(pairs);
};

export const buildRequestUrl = ({ path, query }: Pick<FetcherArgs, 'path' | 'query'>) => {
  const search = query ? buildSearchParams(query) : '';

  const url = `${import.meta.env.VITE_TMDB_URL}`;

  const baseUrlWithPath = `${url}${path}`;

  return search ? `${baseUrlWithPath}?${search}` : baseUrlWithPath;
};

export const fetcher = async ({ init, path, token, query }: FetcherArgs) => {
  const fetchUrl = buildRequestUrl({ path, query });

  const options = init || {};
  const headers = token
    ? {
        Authorization: token,
        'Content-Type': 'application/json',
        ...options.headers,
      }
    : {
        'Content-Type': 'application/json',
        ...options.headers,
      };

  const response = await fetch(fetchUrl, { ...options, headers });

  if (response.status >= 300) {
    const json = await response.json();

    if (json.errors) {
      throw json.errors;
    }

    throw json;
  }

  return response;
};

export const jsonFetcher = async <T>(args: FetcherArgs): Promise<T> => {
    const request = await fetcher(args);
    const response = await request.json();
    return response;
}
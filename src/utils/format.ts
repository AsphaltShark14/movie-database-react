import { MediaBase } from "../services/types";
import { categories } from "./constants/categories";

type GetListItem = {
  type: MediaBase["media_type"];
  query: string;
};

export const getListItem = ({ type = "movie", query }: GetListItem) => {
  return categories[type].find((list) => list.query === query)?.title || query;
};

import { MediaBase } from "../services/types";
import { categories } from "./constants/categories";
import { languages } from "./constants/languages";

type GetListItem = {
  type: MediaBase["media_type"];
  query?: string;
};

export const getListItem = ({ type = "movie", query }: GetListItem) => {
  return categories[type].find((list) => list.query === query)?.title || "";
};

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatCurrency(amount?: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  });

  return formatter.format(amount || 0);
}

export function formatRuntime(minutes: number) {
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const min = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  return `${hours ? hours + "h" : ""} ${min}min`;
}

export function formatLanguage(iso?: string) {
  const fullLang = languages.find((lang) => lang.iso_639_1 === iso);

  if (fullLang) {
    return fullLang.english_name;
  }

  return iso;
}

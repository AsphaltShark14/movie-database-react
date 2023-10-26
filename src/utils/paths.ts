import { MediaBase } from "../services/types";

export const paths = {
  genre: (mediaType: MediaBase["media_type"], id: number) =>
    `/genre/${id}/${mediaType}`,
  index: "/",
  media: (mediaType: MediaBase["media_type"], id: number) =>
    `/${mediaType}/${id}`,
  movieCategory: (category: string) => `/movie/categories/${category}`,
  moviePhotos: (id: number) => `/movie/${id}/photos`,
  movieVideo: (id: number) => `/movie/${id}/videos`,
  movies: "/movie",
  notFound: "/404",
  person: (id: number) => `/person/${id}`,
  search: "/search",
  tv: "/tv",
  tvCategory: (category: string) => `/tv/categories/${category}`,
  likes: "/likes",
  movie: "/movie/:movieId",
  tvShow: "/tv/:tvId",
  movieInfoPhotos: "/movie/:movieId/photos",
  movieInfoVideos: "/movie/:movieId/videos",
  moviesCategory: "/movie/categories/:category",
  tvSeriesCategory: "/tv/categories/:category",
  people: "/person/:personId",
  likesExpand: "/likes/:type",
  likesType: (mediaType: MediaBase["media_type"]) => `/likes/${mediaType}`,
  genres: "/genre/:id/:mediaType",
};

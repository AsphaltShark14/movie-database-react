import { Cast, Crew, MovieBase, TvBase } from "../services/types";

export type StoreState = {
  movies: MovieBase[];
  tv: TvBase[];
  people: (Crew | Cast)[];
};

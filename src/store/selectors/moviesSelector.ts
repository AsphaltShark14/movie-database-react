import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../utils/types";

const movieList = (state: StoreState) => state.movies;

export const hasMovieLikeSelector = (movieId: number) =>
  createSelector([movieList], (state) => {
    return state.some((movie) => movie.id === movieId);
  });

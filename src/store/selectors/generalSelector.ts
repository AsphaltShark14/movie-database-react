import { createSelector } from "@reduxjs/toolkit";
import { MediaType } from "../../services/types";
import { StoreState } from "../../utils/types";

const state = (state: StoreState) => state;

export const typeListSelector = (type: MediaType) =>
  createSelector([state], (state) => {
    if (type === "movie") {
      return state.movies;
    }

    if (type === "tv") {
      return state.tv;
    }
  });

import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../utils/types";

const tvList = (state: StoreState) => state.tv;

export const hasTvLikeSelector = (tvId: number) =>
  createSelector([tvList], (state) => {
    return state.some((tvShow) => tvShow.id === tvId);
  });

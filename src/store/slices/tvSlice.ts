import { createSlice } from "@reduxjs/toolkit";
import { TvBase } from "../../services/types";

const initialState: TvBase[] = [];

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    addTvShow: (state, action) => {
      state.push(action.payload);
    },
    removeTvShow: (state, action) => {
      return state.filter((tvShow) => tvShow.id !== action.payload.id);
    },
  },
});

const { actions } = tvSlice;

export const { addTvShow, removeTvShow } = actions;

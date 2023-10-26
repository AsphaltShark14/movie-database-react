import { createSlice } from "@reduxjs/toolkit";
import { MovieBase } from "../../services/types";

const initialState: MovieBase[] = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

const { actions } = moviesSlice;

export const { addMovie, removeMovie } = actions;

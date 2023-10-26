import { createSlice } from "@reduxjs/toolkit";
import { MovieBase } from "../../services/types";

const initialState: MovieBase[] = [];

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      return state.filter((movie) => movie.id != action.payload.id);
    },
  },
});

const { actions } = movieSlice;

export const { addMovie, removeMovie } = actions;

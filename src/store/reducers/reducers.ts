import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "../slices/moviesSlice";
import { peopleSlice } from "../slices/peopleSlice";
import { tvSlice } from "../slices/tvSlice";

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  tv: tvSlice.reducer,
  people: peopleSlice.reducer,
});

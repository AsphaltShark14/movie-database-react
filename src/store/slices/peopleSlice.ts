import { createSlice } from "@reduxjs/toolkit";
import { Cast, Crew } from "../../services/types";

const initialState: (Cast | Crew)[] = [];

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      state.push(action.payload);
    },
    removePerson: (state, action) => {
      return state.filter((person) => person.id !== action.payload.id);
    },
  },
});

const { actions } = peopleSlice;

export const { addPerson, removePerson } = actions;

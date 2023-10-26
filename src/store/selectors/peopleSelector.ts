import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../../utils/types";

const peopleList = (state: StoreState) => state.people;

export const hasPersonLikeSelector = (id: number) =>
  createSelector([peopleList], (state) => {
    return state.some((person) => person.id === id);
  });

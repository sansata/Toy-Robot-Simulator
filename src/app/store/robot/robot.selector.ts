import { createSelector } from "@ngrx/store";
import { IAppState } from "../models";


   
  export const selectState = (state) => state;
   
  export const selectInitialState = createSelector(selectState, (state) => state);
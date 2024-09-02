import { createSelector } from "@ngrx/store";

export interface IState {
  counter: number;
}

/**
 * @desc Selectors are pure functions used for obtaining slices of store state. Provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state.
 * @param state 
 * @returns 
 */
export const selectCount = (state: IState) => state.counter; 


/*
  Using selectors for multiple pieces of state
  The createSelector can be used to select some data from the state based on several slices of the same state.
  The createSelector function can take up to 8 selector functions for more complete state selections.
  You can use createSelector to achieve just that. Your visible books will always be up to date even if you update them in allBooks. They will always show the books that belong to your user if there is one selected and will show all the books when there is no user selected.
  The result will be just some of your state filtered by another section of the state. And it will be always up to date.
 */
export const selectDoubleCount = createSelector(
  selectCount,
  (count) => count * 2
)



import { createSelector } from "@reduxjs/toolkit";

// base selector: return the entire study slice
const selectStudy = (state) => state.study;

// Memoized selector: returns the array of cards
export const selectCards = createSelector(
    [selectStudy],
    study => study.cards
);

// Memoized selector: returns the current card based on index
export const selectCurrentCard = createSelector(
    [selectCards, selectStudy],
    (cards, study) => cards[study.index]
);

export const selectProgress = createSelector(
    [selectStudy],
    study => ({
        current: study.index + 1,
        total: study.cards.length,
        score: study.score,
        completed: study.completed

    })
);
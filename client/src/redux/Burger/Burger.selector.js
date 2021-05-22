import { createSelector } from 'reselect';

const selectState = state => state.toggle;

export const selectDrawState = createSelector(
    [selectState],
    (toggle) => toggle.toggleState
);

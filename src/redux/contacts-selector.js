import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from './filter-selector';

export const selectContacts = state => state.contacts.items;

export const selectContactsError = state => state.contacts.error;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectContactsVisibleForm = state =>
  state.contacts.isVisibleUpdateForm;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filterValue, contacts) => {
    const normalizedFilter = filterValue.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }
);

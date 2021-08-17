import { createSelector } from 'reselect';

export const usersSelector = (state) => state.users.usersList;
export const filterTextSelector = (state) => state.users.filterText;

//написати селектор який буде фільтрувати список в залежності від тексту

export const filterUsersList = createSelector(
  [usersSelector, filterTextSelector],
  (usersList, filterText) => {
    if (filterText === '') {
      return usersList;
    }
    return usersList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }
);
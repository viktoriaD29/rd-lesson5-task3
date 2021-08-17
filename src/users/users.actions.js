export const FIND_USERS = 'FIND_USER';

export const findUsers = (text) => {
  return {
    type: FIND_USERS,
    payload: {
      text,
    },
  };
};

const BOOK_STATUS = 'BOOK_STATUS';

export function checkStatus(id) {
  return {
    type: BOOK_STATUS,
    payload: { id },
  };
}

const categoriesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case BOOK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoriesReducer;

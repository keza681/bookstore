const BOOK_STATUS = 'BOOK_STATUS';

export const checkStatus = (id) => ({ type: BOOK_STATUS, payload: { id } });

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default categoriesReducer;

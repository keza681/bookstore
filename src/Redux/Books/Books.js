const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

const initialState = [{
  id: 1,
  genre: 'Lecture',
  title: 'React',
  author: 'Marck Bochelier',
  chapter: 'programming',
}];

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};
export default booksReducer;

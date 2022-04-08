const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const UPDATE_BK = 'UPDATE_BK';
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dVhWQ90GJqKR2YkPiOuz/books';

const initialState = [];

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.payload }];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload.id)];
    case UPDATE_BK:
      return [...action.payload];
    default:
      return state;
  }
};
export default booksReducer;

export const getItems = () => (dispatch) => fetch(`${API}`,
  {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then((res) => res.json()).then((data) => {
  const books = Object.keys(data).map((key) => {
    const book = data[key][0];
    return {
      id: key,
      ...book,
    };
  });
  dispatch({ type: UPDATE_BK, payload: books });
}).catch(() => {});

export const addBook = (book) => (dispatch) => fetch(
  `${API}`,
  {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      item_id: book.id, title: book.title, author: book.author, category: book.category,
    }),
  },
).then((res) => {
  if (res.ok) {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
});

export const removeBook = (bookId) => (dispatch) => {
  const body = {
    item_id: bookId,
  };
  return fetch(`${API}/${bookId}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    }).then((res) => {
    if (res.ok) {
      dispatch({
        type: REMOVE_BOOK,
        id: bookId,
      });
    }
  }).catch(() => {});
};

import ActionTypes from "../../actiontypes";

const BOOK_INITIAL_STATE = {};

const BookReducer = (state = BOOK_INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };

    case ActionTypes.GET_ALL_BOOKS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.CREATE_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, ...action.payload],
        loading: false,
      };

    case ActionTypes.CREATE_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.GET_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload[0],
        loading: false,
      };

    case ActionTypes.GET_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.UPDATE_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload[0],
        loading: false,
      };

    case ActionTypes.UPDATE_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload[0],
        loading: false,
      };

    case ActionTypes.DELETE_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.BORROW_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.BORROW_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload[0],
        loading: false,
      };

    case ActionTypes.BORROW_BOOK_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default BookReducer;

import ActionTypes from "../../actiontypes";
import Axios from "axios";

export const getAllBooks = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ALL_BOOKS_REQUEST });
  try {
    const { data } = await Axios.get(`${process.env.REACT_APP_BASE_URL}/book`);
    dispatch({
      type: ActionTypes.GET_ALL_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_ALL_BOOKS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createBook = (bookObj) => async (dispatch) => {
  dispatch({ type: ActionTypes.CREATE_BOOK_REQUEST });
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/book`,
      bookObj
    );
    dispatch({
      type: ActionTypes.CREATE_BOOK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.CREATE_BOOK_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getBookById = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_BOOK_REQUEST });
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/book/${id}`
    );
    dispatch({
      type: ActionTypes.GET_BOOK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_BOOK_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateBook = (id, bookObj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_BOOK_REQUEST });
  try {
    const { data } = await Axios.patch(
      `${process.env.REACT_APP_BASE_URL}/book/${id}`,
      bookObj
    );
    dispatch({
      type: ActionTypes.UPDATE_BOOK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.UPDATE_BOOK_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteBook = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_BOOK_REQUEST });
  try {
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_BASE_URL}/book/${id}`
    );
    dispatch({
      type: ActionTypes.DELETE_BOOK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.DELETE_BOOK_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const borrowBook = (id, bookObj) => async (dispatch) => {
  dispatch({ type: ActionTypes.BORROW_BOOK_REQUEST });
  try {
    const { data } = await Axios.patch(
      `${process.env.REACT_APP_BASE_URL}/book/borrow/${id}`,
      bookObj
    );
    dispatch({
      type: ActionTypes.BORROW_BOOK_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.BORROW_BOOK_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

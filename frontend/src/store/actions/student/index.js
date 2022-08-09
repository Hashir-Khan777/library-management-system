import Axios from "axios";
import ActionTypes from "../../actiontypes";

export const getAllStudents = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ALL_STUDENTS_REQUEST });
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/student`
    );
    dispatch({
      type: ActionTypes.GET_ALL_STUDENTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_ALL_STUDENTS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getStudentByID = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_STUDENT_REQUEST });
  try {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_BASE_URL}/student/${id}`
    );
    dispatch({
      type: ActionTypes.GET_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.GET_STUDENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const createStudent = (studentObj) => async (dispatch) => {
  dispatch({ type: ActionTypes.CREATE_STUDENT_REQUEST });
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/student`,
      studentObj
    );
    dispatch({
      type: ActionTypes.CREATE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.CREATE_STUDENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const updateStudent = (id, studentObj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_STUDENT_REQUEST });
  try {
    const { data } = await Axios.patch(
      `${process.env.REACT_APP_BASE_URL}/student/${id}`,
      studentObj
    );
    dispatch({
      type: ActionTypes.UPDATE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.UPDATE_STUDENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_STUDENT_REQUEST });
  try {
    const { data } = await Axios.delete(
      `${process.env.REACT_APP_BASE_URL}/student/${id}`
    );
    dispatch({
      type: ActionTypes.DELETE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ActionTypes.DELETE_STUDENT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

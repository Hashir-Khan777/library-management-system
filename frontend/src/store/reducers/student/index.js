import ActionTypes from "../../actiontypes";

const STUDENT_INITIAL_STATE = {};

const StudentReducer = (state = STUDENT_INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };

    case ActionTypes.GET_ALL_STUDENTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.GET_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.GET_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload[0],
        loading: false,
      };

    case ActionTypes.GET_STUDENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.CREATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        students: [...state.students, ...action.payload],
        loading: false,
      };

    case ActionTypes.CREATE_STUDENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload[0],
        loading: false,
      };

    case ActionTypes.UPDATE_STUDENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ActionTypes.DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload[0],
        loading: false,
      };

    case ActionTypes.DELETE_STUDENT_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default StudentReducer;

import {
  START_ADD_USER_SAGA,
  ADD_USER_OK_SAGA,
  GET_USER_OK_SAGA,
  START_GET_USER_SAGA,
  START_EDIT_USER_SAGA,
  EDIT_USER_OK_SAGA,
  START_DELETE_USER_SAGA,
  DELETE_USER_OK_SAGA,
  GET_TO_EDIT_USER_SAGA,
} from "../action/types";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case START_GET_USER_SAGA:
    case START_ADD_USER_SAGA:
      return {
        ...state,
        users: action.payload,
        loading: action.loading,
      };
    case START_DELETE_USER_SAGA:
      return {
        ...state,
        user: action.payload,
      };
    case START_EDIT_USER_SAGA:
      return {
        ...state,
        loading: action.loading,
        user: action.payload,
      };
    case GET_TO_EDIT_USER_SAGA:
      return {
        ...state,
        user: action.payload,
        loading: action.loading,
      };
    case GET_USER_OK_SAGA:
      return {
        ...state,
        users: action.payload,
        loading: action.loading,
      };
    case ADD_USER_OK_SAGA:
      return {
        ...state,
        loading: action.loading,
      };
    case EDIT_USER_OK_SAGA:
      return {
        ...state,
        loading: action.loading,
        user: action.payload,
      };
    case DELETE_USER_OK_SAGA:
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user._id !== state.user._id),
        user: action.payload,
      };
    default:
      return state;
  }
}

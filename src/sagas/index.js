import { takeEvery, all, call } from "redux-saga/effects";
import {
  START_ADD_USER_SAGA,
  START_EDIT_USER_SAGA,
  START_GET_USER_SAGA,
  START_DELETE_USER_SAGA,
} from "../action/types";
import {
  addUserApi,
  getAlluserApi,
  editUserApi,
  deleteUserApi,
} from "../api/index";
import {
  addUserOKAction,
  deleteUserOkAction,
  editUserOkAction,
  getAlluserOkAction,
} from "../action/actions";

//workers
export function* getAlluserSaga() {
  try {
    const res = yield call(getAlluserApi);
    let users = res.data.Data;
    yield getAlluserOkAction(users);
  } catch (error) {
    yield console.log(error.message);
  }
}

export function* addUserSage(action) {
  const user = action.payload;
  try {
    const res = yield call(addUserApi, user);
    console.log(res);
    yield addUserOKAction(user);
  } catch (error) {
    yield console.log(error.message);
  }
}

function* editUserSaga(action) {
  const user = action.payload;
  try {
    const res = yield editUserApi(user);
    console.log(res);
    yield editUserOkAction();
  } catch (error) {
    yield console.log(error.message);
  }
}

function* deleteUserSaga(action) {
  const user = action.payload;
  try {
    const res = yield deleteUserApi(user);
    console.log(res);
    yield deleteUserOkAction();
  } catch (error) {
    yield console.log(error.message);
  }
}
//watchers

export function* watchGetAllUserSaga() {
  yield takeEvery(START_GET_USER_SAGA, getAlluserSaga);
}

export function* watchAddUserSaga() {
  yield takeEvery(START_ADD_USER_SAGA, addUserSage);
}

export function* watchEditUserSaga() {
  yield takeEvery(START_EDIT_USER_SAGA, editUserSaga);
}

export function* watchDeleteUserSaga() {
  yield takeEvery(START_DELETE_USER_SAGA, deleteUserSaga);
}

//rootSage

export default function* rootSaga() {
  yield all([
    watchGetAllUserSaga(),
    watchAddUserSaga(),
    watchEditUserSaga(),
    watchDeleteUserSaga(),
  ]);
}

import {
  START_ADD_USER_SAGA,
  START_GET_USER_SAGA,
  GET_USER_OK_SAGA,
  ADD_USER_OK_SAGA,
  EDIT_USER_OK_SAGA,
  START_EDIT_USER_SAGA,
  START_DELETE_USER_SAGA,
  DELETE_USER_OK_SAGA,
  GET_TO_EDIT_USER_SAGA,
  GET_TO_DELETE_USER_SAGA,
} from "./types";
import store from "../store";
//actions

function addUser(user) {
  return { type: START_ADD_USER_SAGA, loading: true, payload: user };
}
function addUserOk() {
  return { type: ADD_USER_OK_SAGA, loading: false };
}

function getAlluser() {
  return { type: START_GET_USER_SAGA, loading: true, payload: [] };
}
function getAlluserOk(users) {
  return { type: GET_USER_OK_SAGA, payload: users, loading: false };
}

//edit
function getToEditUser(user) {
  return { type: GET_TO_EDIT_USER_SAGA, loading: true, payload: user };
}
function editUser(user) {
  return { type: START_EDIT_USER_SAGA, loading: true, payload: user };
}
function editUserOk() {
  return { type: EDIT_USER_OK_SAGA, loading: false, payload: {} };
}

//delete
function getToDeleteUser(user) {
  return { type: GET_TO_DELETE_USER_SAGA, loading: true, payload: user };
}
function deleteUser(user) {
  return { type: START_DELETE_USER_SAGA, loading: true, payload: user };
}
function deleteUserOk() {
  return { type: DELETE_USER_OK_SAGA, loading: false, payload: {} };
}

//dispatching the actions
//get
export function getAlluserAction() {
  store.dispatch(getAlluser());
}
export function getAlluserOkAction(users) {
  store.dispatch(getAlluserOk(users));
}

//add
export function addUserAction(user) {
  store.dispatch(addUser(user));
}
export function addUserOKAction() {
  store.dispatch(addUserOk());
}

//edit
export function getToEditUserAction(user) {
  store.dispatch(getToEditUser(user));
}
export function editUserAction(user) {
  store.dispatch(editUser(user));
}

export function editUserOkAction(user) {
  store.dispatch(editUserOk(user));
}

//delete
export function getToDeleteUserAction(user) {
  store.dispatch(getToDeleteUser(user));
}
export function deleteUserAction(user) {
  store.dispatch(deleteUser(user));
}
export function deleteUserOkAction() {
  store.dispatch(deleteUserOk());
}

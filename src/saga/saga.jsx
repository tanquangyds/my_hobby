import { call, put, takeLatest } from "redux-saga/effects";
import type from "./store/actionTypes";
import * as action from "../actions/Tasks";
import axios from "../utils/axios";

const endpoint = "http://localhost:3000/task";
function* getTodos() {
  const data = yield call(axios.request, {
    url: `${endpoint}`
  });
  yield put(action.GetTodos(data));
}
// function* getTodo(id) {
//   const data = yield call(axios.request, {
//     url: `${endpoint}/${id}`
//   });
//   yield put(action.GetTodo(data));
// }
function* addTodo(action) {
  const { data } = action;
  yield call(axios.request, {
    url: `${endpoint}`,
    method: "post",
    data
  });
  yield getTodos();
}
// function* updateTodo(action) {
//   const { data } = action;
//   yield call(axios.request, {
//     url: `${endpoint}/${data.id}`,
//     method: "put",
//     data
//   });
//   yield getTodos();
// }
// function* removeTodo(action) {
//   const { id } = action;
//   yield call(axios.request, {
//     url: `${endpoint}/${id}`,
//     method: "delete"
//   });
//   yield getTodos();
// }

const request = "_REQUESTED";
function* todoSaga() {
  yield takeLatest(`${type.GET_TODOS}${request}`, getTodos);
//   yield takeLatest(`${type.GET_TODO}${request}`, getTodo);
  yield takeLatest(`${type.ADD_TODO}${request}`, addTodo);
//   yield takeLatest(`${type.UPDATE_TODO}${request}`, updateTodo);
//   yield takeLatest(`${type.REMOVE_TODO}${request}`, removeTodo);
}

export default todoSaga;

import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import { delTodo } from '../actions/todoAC';
import { DEL_TODO_SAGA } from '../types/todoTypes';


const fetchTodo = (id) => {
  return fetch("http://localhost:3001", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  })
  .then(res => res.json())
}

function* todoSagaWorker(action) {
  const todoFromServer = yield call(fetchTodo,action.payload)
  yield put(delTodo(todoFromServer))
}

function* todoSagaWatcher(){
  yield takeLatest(DEL_TODO_SAGA,todoSagaWorker)
}

export default todoSagaWatcher

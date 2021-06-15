import {
  ADD_TODO,
  DEL_TODO,
  DONE_TODO,
  EDIT_TODO,
  GET_TODO,
} from "../types/todoTypes";

import { DEL_TODO_SAGA } from "../types/todoTypes"

export const getAllTodos = (todos) => {
  return {
    type: GET_TODO,
    payload: todos,
  };
};

export const addTodo = (info) => {
  return {
    type: ADD_TODO,
    payload: info,
  };
};

export const delTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: id,
  };
};

export const doneTodo = (id) => {
  // console.log(id);
  return {
    type: DONE_TODO,
    payload: id,
  };
};

export const editTodo = ({id, text}) => {
  return {
    type: EDIT_TODO,
    payload:  {id, text} 
  };
};

export const getAll = () => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3001");
  const todoList = await response.json();
  dispatch(getAllTodos(todoList));
};

export const addOneThunk = (text) => async (dispatch, getState) => {
  const res = await fetch("http://localhost:3001", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });
  const result = await res.json();
  dispatch(addTodo(result));
};


export const delOneThunk = (id) => async (dispatch,getState) => {
  const res = await fetch("http://localhost:3001", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  });
  const result = await res.json();

  dispatch(delTodo(result));
}


export const doneOneThunk = (id) => async (dispatch,getState) => {
  const res = await fetch("http://localhost:3001", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id
    }),
  });
  const result = await res.json();
console.log(result);
  dispatch(doneTodo(result));
}

export const editOneThunk = (id,text) => async (dispatch,getState) => {
  const res = await fetch("http://localhost:3001", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      text
    }),
  });
  const result = await res.json();

  dispatch(editTodo(result));
}

export const delTodoSaga = (id) => {
  return{
    type:DEL_TODO_SAGA,
    payload:id
  }
}

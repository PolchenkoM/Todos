import { useTodosContext } from "../context/todoContext";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addOneThunk } from "../../redux/actions/todoAC";

function Todo(){

  const dispatch = useDispatch()

  function addHandler(event) {
    event.preventDefault();
    dispatch(addOneThunk(event.target[0].value));
  }

  return(
    <form onSubmit={(e) =>addHandler (e) } className="mb-3 d-flex align-items-center justify-content-center container col-4">
    <input  type="text" placeholder='ToDo' className="form-control" id="exampleInputPassword1"/>
    <button type="submit" className="btn btn-primary">Go</button>
  </form>
  )
}

export default Todo

// import { useState } from "react"
import { useState } from "react";
import { useDispatch } from "react-redux";

import { delOneThunk, delTodoSaga, doneOneThunk,editOneThunk } from "../../redux/actions/todoAC";
// import { useTodosContext } from "../context/todoContext";

export default function TodoList({todo}) {
  // const {dellHandler,doneHandler,editRouter} = useTodosContext();

  const [visible,setVisible] = useState(false)
  const [input,setInput] = useState(todo.text)

  function changeVisible(){
    if(visible){
      // editRouter(todo._id,input)
      dispatch(editOneThunk(todo._id,input))
     
    }
    setVisible(!visible)
  }

  const dispatch = useDispatch()


  function delHandler() {
    dispatch(delTodoSaga(todo._id));
  }

  function doneHandler() {
    dispatch(doneOneThunk(todo._id));
  }

  return (
    <ul className="list-group  container ">
    <li className="list-group-item d-flex align-items-center justify-content-between ">
      <span style={todo.status? {textDecoration:"line-through"}: null}>
        {visible? <input value={input} onChange={(e) => setInput(e.target.value)}></input>: todo.text}
      </span>
      <span>
    <button 
     onClick={() => doneHandler(todo._id)} 
     className="btn btn-success">{!todo.status? 'Done':'UnDone'}</button>
    <button
     onClick={() => delHandler(todo._id)} 
     className="btn btn-danger">Dell</button>
    <button 
    onClick={changeVisible} 
    className="btn btn-danger">Edit</button>
    
      </span>
    </li>
  </ul>
  )
}


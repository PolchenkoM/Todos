import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";
import { useTodosContext } from "./components/context/todoContext";
import { useDispatch, useSelector } from "react-redux";
import { addOneThunk, getAll } from "./redux/actions/todoAC";

function App() {
  const dispatch = useDispatch();
  // const { todos } = useTodosContext();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="App">
      <Todo />
      {todos.map((todo) => {
        return <TodoList todo={todo} key={todo._id} />;
      })}
    </div>
  );
}

export default App;

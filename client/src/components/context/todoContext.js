// import React, { useState, useEffect, useCallback, useContext } from "react";

// const todoContext = React.createContext();

// const TodoProvider = ({ children }) => {

//   const [todos, setTodos] = useState([]);

//   const getAllTodos = async () => {
//     const response = await fetch("http://localhost:3001");
//     const todoList = await response.json();
//     setTodos(todoList);

//   };




//   useEffect(() => {
//     getAllTodos();
//   }, []);




//   async function addHandler(event) {
//     event.preventDefault();
//     const res = await fetch("http://localhost:3001", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: event.target[0].value,
//       }),
//     });
//     const result =await res.json();
//     setTodos((prev) => [...prev, result]);
//   }



//   async function dellHandler(id) {
//     const res = await fetch("http://localhost:3001", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id,
//       }),
//     });

//     if (res.ok) {
//       console.log("OK!!!!!");
//       setTodos((prev) => [...prev].filter((el) => el._id !== id));
//     } else {
//       console.log("NOT OK!!!!!");
//     }

//   }




//   async function doneHandler(id) {
//     const res = await fetch("http://localhost:3001", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id,
//       }),
//     });

//     if (res.ok) {
//       console.log("OK!!!!!");
//       setTodos((pre) =>
//         [...pre].map((el) =>
//           el._id === id ? { ...el, status: !el.status } : el
//         )
//       );
//     } else {
//       console.log("NOT OK!!!!!");
//     }
//   }



//   async function editRouter(id, text) {
//     console.log(id,text);
//     const res = await fetch("http://localhost:3001", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         id:id,
//         text,
//       }),
//     });

//     if (res.ok) {
//       console.log("OK!!!!!");
//       setTodos((pre) =>
//         [...pre].map((el) =>
//           el._id === id ? { ...el, text } : el
//         )
//       );
//     } else {
//       console.log("NOT OK!!!!!");
//     }
//   }



//   return (
//     <todoContext.Provider
//       value={{
//         todos,
//         addHandler,
//         dellHandler,
//         doneHandler,
//         editRouter,
//       }}
//     >
//       {children}
//     </todoContext.Provider>
//   );
// };
// export default TodoProvider;
// const useTodosContext = () => useContext(todoContext);
// export { useTodosContext };

const {
  ADD_TODO,
  DEL_TODO,
  EDIT_TODO,
  DONE_TODO,
  GET_TODO,
} = require("../types/todoTypes");

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODO:
      return action.payload;
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((item) => item._id !== action.payload);
    case EDIT_TODO:
      console.log(action.payload);
      return [...state].map((item) =>
        item._id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    case DONE_TODO:
      return [...state].map((item) =>
        item._id === action.payload
          ? { ...item, status: !item.status }
          : item
      );
    default:
      return state;
  }
};
export default todoReducer;

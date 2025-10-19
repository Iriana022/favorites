import { createStore, combineReducers } from "redux"
import ToDoReducer from "./TodoRducer"

export default createStore(combineReducers({
  todos: ToDoReducer,
  filter: (state = 0, action) => state
}))


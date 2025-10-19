import { connect } from "react-redux"
import { todoSelector } from "../store/TodoSelector"
import { toggleTodoAction } from "../store/TodoActions"

function TodoItem({todo, onToggle}){
    return (
        <li>
            <label htmlFor="">
                <input type="checkbox" name="" id="" checked={todo.completed}
                onChange={() => onToggle(todo)} />
            </label>
            {todo.title}
        </li>
    )
}

export function TodoList({todos, onToggle}){
    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} 
            key={todo.id} />)}
        </ul>
    )
}

export const TodoListStore = connect(
    state => ({
        todos: todoSelector(state)
    }),
    dispatch => ({
        onToggle : todo => dispatch(toggleTodoAction(todo))
    })
)(TodoList)
import { TodoItem } from "./TodoItem";

export function TodoList ({todos,toggleTodo, deleteItem }) {

    return (
    <>
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteItem={deleteItem}/>
                );
            })}
        </ul>
    </>
    );
}
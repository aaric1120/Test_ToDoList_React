export function TodoItem({id, title, completed, key,toggleTodo, deleteItem}) {
    return (
        <li key={key}>
            {console.log(id)}
            <label>
            <input type="checkbox" checked={completed} onChange={event => toggleTodo(id,event.target.checked)}/>
            {title}
            </label>
            <button type="button" className="btn btn-danger" onClick={() => deleteItem(id)}>Delete</button>
        </li>
    );
}
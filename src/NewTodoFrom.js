import { useState } from "react";

export function NewToDoForm({addTodo}) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (newItem === "") return;
        
        addTodo(newItem);

        setNewItem("");
      }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" value={newItem} onChange={event => setNewItem(event.target.value)} id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
    )
}


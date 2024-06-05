import { NewToDoForm } from "./NewTodoFrom";
import { TodoList } from "./TodoList";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";


export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]);

  function addTodo(title) {
    setTodos((currTodos) => {
      return(
        [...currTodos,{
          id: Math.random(),
          title,
          completed:false
        },
      ]
      );
  });
  }

  function toggleTodo(id,completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed};
        }
        return todo;
      })
    })
  }

  function deleteItem(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
  <>
    <NewToDoForm addTodo={addTodo} />
    <h1 className="header">ToDo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteItem={deleteItem}/>
    
  </>
  )
}
import { useState } from "react"
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 0, name: "Eat"},
    {id: 1, name: "Sleep"},
    {id: 2, name: "Jogging"},
    {id: 3, name: "Play video game"}
  ]);

  const [todoName, setTodoName] = useState("");

  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, {id: 4, name: todoName} ])

  }

  return (
    <div>
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.name}</li>)
      }
    </ul>
    <form onSubmit={addTodo}>
      <input placeholder="Todo name" autoFocus value={todoName} onChange={e => setTodoName(e.target.value)} />
    </form>
    <button onClick={addTodo}>Add to do</button>
    </div>
  );
}

export default App;

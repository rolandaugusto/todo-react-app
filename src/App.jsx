import { useState } from "react";
import ToDo from "./ToDo";
import NewToDo from "./NewToDo";

function App() {
  const [todos, setTodos] = useState([]);
  const handleCreateNew = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdateTodo = (nextVal) =>
    setTodos(
      todos.map((t) =>
        t.id === nextVal.id ? { ...nextVal, name: nextVal.name } : t
      )
    );

  return (
    <div className="place-content-center">
      <header className="flex text-center items-center flex-col justify-center bg-violet-800 text-white text-xl font-semibold py-4">
        <h1>ToDo App</h1>
      </header>
      <main className="flex mt-4 max-w-sm flex-col justify-center m-auto">
        <NewToDo onCreate={(todo) => handleCreateNew(todo)} />
        <div className="flex flex-col items-start mt-2">
          {todos.map((todo, idx) => (
            <ToDo
              name={todo.name}
              id={todo.id}
              key={idx}
              updateTodo={handleUpdateTodo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

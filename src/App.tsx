import { useState } from "react";
import ToDo from "./components/ToDo";
import NewToDo from "./components/NewToDo";
import type {IToDo} from "./types";

function App() {
  const [todos, setTodos] = useState<IToDo[]>([]);

  const handleCreateNew = (todo: IToDo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdateTodo = (nextTodo: IToDo) =>
    setTodos(
      todos.map((t) =>
        t.id === nextTodo.id ? { ...nextTodo, name: nextTodo.name } : t
      )
    );
  const deleteTodo = (todoId: string) => setTodos(todos.filter((t) => t.id !== todoId));

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
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

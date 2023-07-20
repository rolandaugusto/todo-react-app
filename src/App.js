import ToDo from "./ToDo";

function App() {
  return (
    <div className="text-center">
      <header className="flex items-center flex-col justify-center bg-violet-800 text-white text-xl font-semibold py-4">
        <h1>ToDo App</h1>
      </header>
      <main className="mt-4">
        <ToDo name={"Foooo"} index={1} />
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewToDo({ onCreate }) {
  const [value, setValue] = useState("");
  const create = (e) => {
    e.preventDefault();
    onCreate({ name: value, id: uuidv4() });
    setValue("");
  };
  const handleInput = (e) => setValue(e.target.value);

  return (
    <form onSubmit={create} className="flex w-full">
      <input
        className="border-2 border-violet-800 rounded p-2 flex-1"
        value={value}
        type="text"
        onInput={handleInput}
      />
      <button
        className="ml-2 bg-violet-600 p-2 text-white rounded disabled:bg-violet-300"
        type="submit"
        disabled={value.trim() === ""}
      >
        Add
      </button>
    </form>
  );
}

import clsx from "clsx";
import { useState } from "react";
import IconEdit from "./icons/IconEdit";
import IconDelete from "./icons/IconDelete";

export default function ToDo({ name, id, updateTodo, deleteTodo }) {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [nextValue, setNextValue] = useState(name);

  const handleOnBlur = () => {
    updateTodo({ name: nextValue, id });
    setIsEditMode(false);
  };

  const handleClickEditMode = () => {
    setIsEditMode(true);
  };
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-full p-1 transition-colors",
        isOptionsVisible && "bg-slate-100"
      )}
      onMouseEnter={() => setIsOptionsVisible(true)}
      onMouseLeave={() => setIsOptionsVisible(false)}
    >
      <input
        id={id}
        type="checkbox"
        className="mr-2"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      {!isEditMode ? (
        <label
          htmlFor={id}
          className={clsx("flex-1 text-ellipsis", checked && "line-through")}
        >
          {name}
        </label>
      ) : (
        <input
          type="text"
          value={nextValue}
          className="flex-1 px-1 rounded"
          onChange={(e) => setNextValue(e.currentTarget.value)}
          onBlur={handleOnBlur}
        />
      )}
      {isOptionsVisible && !isEditMode && (
        <div className="flex">
          <button className="text-red-500 mr-1">
            <IconDelete onClick={handleDelete} />
          </button>
          <IconEdit className="cursor-pointer" onClick={handleClickEditMode} />
        </div>
      )}
    </div>
  );
}

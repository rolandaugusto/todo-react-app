import { useState } from "react";
import IconEdit from "./icons/IconEdit";
import clsx from "clsx";

export default function ToDo({ name, id, updateTodo }) {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [nextValue, setNextValue] = useState(name);

  const handleOnBlur = () => {
    updateTodo({ name: nextValue, id });
    setIsEditMode(false);
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-center w-full p-1",
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
          className={clsx("flex-1", checked && "line-through")}
        >
          {name}
        </label>
      ) : (
        <input
          type="text"
          value={nextValue}
          className="flex-1"
          onChange={(e) => setNextValue(e.currentTarget.value)}
          onBlur={handleOnBlur}
        />
      )}
      {isOptionsVisible && (
        <IconEdit
          className="cursor-pointer"
          onClick={() => setIsEditMode(true)}
        />
      )}
    </div>
  );
}

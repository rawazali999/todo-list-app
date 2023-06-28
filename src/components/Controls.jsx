import React from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

export const Controls = () => {
  const myContext = useContext(TodoContext);

  function handleClickAll() {
    myContext.setTodos(myContext.originalTodos);
  }

  function handleClickActive() {
    const activeTodos = myContext.originalTodos.filter(
      (todo) => !todo.isCompleted
    );
    myContext.setTodos(activeTodos);
  }

  function handleClickCompleted() {
    const completedTodos = myContext.originalTodos.filter(
      (todo) => todo.isCompleted
    );
    myContext.setTodos(completedTodos);
  }

  function handleClickClearCompleted() {
    const activeTodos = myContext.originalTodos.filter(
      (todo) => !todo.isCompleted
    );
    myContext.setTodos(activeTodos);
    myContext.setOriginalTodos(activeTodos);
  }

  return (
    <div className="p-2 border-2 text-sm font-bold border-cyan-900 rounded-lg mx-auto space-x-3 ">
      <button
        onClick={handleClickAll}
        className="text-cyan-900  rounded-md underline"
      >
        All{" "}
      </button>
      <button
        onClick={handleClickActive}
        className="text-cyan-900  rounded-md underline"
      >
        Active{" "}
      </button>
      <button
        onClick={handleClickCompleted}
        className="text-cyan-900  rounded-md underline"
      >
        Completed
      </button>
      <button
        onClick={handleClickClearCompleted}
        className="text-cyan-900  rounded-md underline"
      >
        Clear Completed
      </button>
    </div>
  );
};

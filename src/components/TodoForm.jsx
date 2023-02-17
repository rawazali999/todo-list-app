import React from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

export default function TodoForm() {
  const myContext = useContext(TodoContext);

  return (
    <>
      <form className=" flex justify-center items-center">
        <input
          id="todoInput"
          className="p-2 border-2 w-56 border-cyan-900 text-cyan-900 rounded-l-md focus:outline-none focus:border-cyan-300"
          type={"text"}
          value={myContext.input}
          placeholder="What do you want to do?"
          onChange={(e) =>
            myContext.setInput(e.target.value, e.preventDefault())
          }
        />
        <button
          onClick={myContext.addTodo}
          className="bg-cyan-900 text-white px-4 py-2 rounded-r-md  border-2 border-cyan-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </form>
      <hr />
    </>
  );
}

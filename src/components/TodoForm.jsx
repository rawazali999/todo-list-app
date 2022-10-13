import React from "react";
import { useState} from "react";
import Todo from "./Todo";


export default function TodoForm() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();
    // putting the state and the new todo to setTodos
    setTodos(
      todos,
      todos.push({
        id: Math.floor(Math.random() * 100),
        text: input,
        isCompleted: false,
      }),todos.reverse()
    );
    console.log(todos);
    setInput("");
  }

  return (
    <>
      
        <form className=" flex justify-center items-center">
          <input
            id="todoInput"
            className="p-2 border-2 border-cyan-900 text-cyan-900 rounded-l-md focus:outline-none focus:border-cyan-300"
            type={"text"}
            value={input}
            placeholder="What you want to do?"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTodo}
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
        <Todo todos={todos}/>
    </>
  );
}

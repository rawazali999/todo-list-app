import "./App.css";
import TodoForm from "./components/TodoForm";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Todo from "./components/Todo";
import { Controls } from "./components/Controls";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState(() => {
    // get the todos from local storage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const [originalTodos, setOriginalTodos] = useState(todos);

  const [input, setInput] = useState("");
  function addTodo() {
    if (input !== "") {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: input,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setOriginalTodos([...originalTodos, newTodo]);
    }
    setInput("");
    // save the todos to local storage here instead using useEffect because we prevent the page from reloading
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleDelete(id) {
    // filter the todos and return the todos that don't match the id
    const newTodos = todos.filter((todo) => todo.id !== id);
    // set the new state
    setTodos(newTodos);
    // set the  local storage new state without the deleted todo
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const [newInput, setNewInput] = useState("");
  const [editing, setEditing] = useState(false);

  function editTodo(id) {
    // find the todo that matches the id
    const todo = todos.find((todo) => todo.id === id);
    todo.text = newInput;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [isCompletedCss, setIsCompletedCss] = useState("");

  function handleComplete(id) {
    const todo = todos.find((todo) => todo.id === id);
    // toggle the isCompleted between true and false
    todo.isCompleted = !todo.isCompleted;
    todo.isCompleted
      ? setIsCompletedCss("line-through cursor-pointer text-gray-400")
      : setIsCompletedCss("pl-2 cursor-pointer");
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const globalStates = {
    todos,
    input,
    newInput,
    addTodo,
    editTodo,
    handleDelete,
    setTodos,
    setInput,
    setNewInput,
    handleComplete,
    isCompletedCss,
    originalTodos,
    setOriginalTodos,
  };

  return (
    <div className="w-screen h-screen flex justify-center bg-cyan-100">
      <div className=" flex flex-col  py-10 text-white">
        <TodoContext.Provider value={globalStates}>
          <div className="flex flex-col m-4 bg-cyan-700 space-y-2 shadow rounded-lg p-4">
            <h1 className="mx-auto text-xl">Todo App</h1>
            <TodoForm />
            <Todo editing={editing} setEditing={setEditing} />
          </div>
          <Controls />{" "}
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;

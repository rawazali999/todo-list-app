import "./App.css";
import TodoForm from "./components/TodoForm";
import React from "react";
import { useState} from "react";
import { createContext } from "react";
import Todo from "./components/Todo";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState(() => {
    // get the todos from localstorage
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
  } );
  const [input, setInput] = useState("");

  function addTodo(e) {
    e.preventDefault();
    // putting the state and the new todo to setTodos
    setTodos(
      todos,
      todos.push({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isCompleted: false,
      }),
      todos.reverse()
    );
    console.log(todos);
    setInput("");
    // save the todos to local storage here instead using useEffect because we prevent the page from reloading
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  function handleDelete(id) {
    // filter the todos and return the todos that don't match the id
    const newTodos = todos.filter((todo) => todo.id !== id);
    // set the new state
    setTodos(newTodos);
  }

  // function handleEdit(id, text) {
  //   // edit the objet with the id
  //   const newTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.text = text;
  //     }
  //     return todo;
  //   });
  //   // set the new state
  //   setTodos(newTodos);
  //   console.log(todos);
  // }

  const globalStates = {
    todos: todos,
    input: input,
    addTodo,
    handleDelete,
    setTodos,
    setInput,
  };

  return (
    <div className="w-screen h-screen  bg-cyan-100">
      <div className=" flex justify-center py-10 text-white">
        <div className="flex flex-col m-4 bg-cyan-700 space-y-2 shadow rounded-lg   p-4">
          <h1 className="mx-auto text-xl">Todo App</h1>
          <TodoContext.Provider value={globalStates}>
            <TodoForm />
            <Todo />
          </TodoContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

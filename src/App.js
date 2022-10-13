import "./App.css";
import TodoForm from "./components/TodoForm";
import React from "react";
// import { useState } from "react";

function App() {
  return (
    <div className="w-screen h-screen bg-cyan-100">
      <div className="  flex justify-center items-center text-white">
        <div className="flex flex-col m-4 bg-cyan-700 space-y-2 shadow rounded-lg   p-4">
          <h1 className="mx-auto">Todo App</h1>
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;

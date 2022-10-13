import React from "react";

export default function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div className="border-2 border-cyan-900 py-1 w-full my-2 px-2 rounded-md bg-white text-cyan-900" key={todo.id}>
            {todo.text}
          </div>
        );
      })}
    </div>
  );
}

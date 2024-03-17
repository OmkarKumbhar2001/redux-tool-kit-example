import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditTodo } from "../features/todo/todoSlice";
const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col justify-center w-full items-center">
        {todos.map((todo, i) => (
          <div
            key={i}
            className="drop-shadow-lg flex justify-between items-center text-white bg-slate-600 mb-1 py-3 px-5 w-3/5 rounded-md"
          >
            
            <p>{todo.text}</p>
            <div>
              
              <button
                className="mr-2 px-3 py-1 rounded-sm"
                onClick={() => dispatch(setEditTodo(todo.id))}
              >
                E
              </button>
              <button
                className="px-3 py-1 bg-red-600 rounded-sm"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;

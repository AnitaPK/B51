import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducers/todoReducer.js";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
        const raw = localStorage.getItem("todosBatch51");
        const parsed = raw ? JSON.parse(raw) : null;
        return Array.isArray(parsed?.todos) ? parsed : init;
      } catch {
        return init;
      }

  });

  useEffect(() => {
    localStorage.setItem("todosBatch51", JSON.stringify(state.todos));
  }, [state]);
console.log(state)
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };

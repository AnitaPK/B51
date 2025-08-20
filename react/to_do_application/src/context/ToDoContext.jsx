import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer.js";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      toDoFromLocal = JSON.parse(localStorage.getItem("todosBatch51"));
      return toDoFromLocal?.todos;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("todosBatch51", JSON.stringify(state));
  }, [state]);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };

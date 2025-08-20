import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tasks</h2>
      {state.todos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div className="row">
          {state.todos.map((todo) => (
            <div  key={todo.id} className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{todo.name}</strong></h5>
                  <p className="card-text">{todo.description}</p>
                  <span style={{ marginLeft: "10px" }}>
                    {todo.isComplete ? "✅" : "❌"}
                  </span>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className="btn btn-warning"
                  >
                    Toggle
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDoList

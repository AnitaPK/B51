import React, { useContext, useState  } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  // const [expanded, setExpanded] = useState({}); // track expanded descriptions

  // Filter todos based on search input
  const filteredTodos = state.todos.filter(
    (todo) =>{
      const matchesSearch =
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "completed") return matchesSearch && todo.isComplete;
    if (filter === "incompleted") return matchesSearch && !todo.isComplete;
    return matchesSearch;
    }
  );

 // Helper to show truncated text
  // const truncateText = (text, id) => {
  //   const limit = 50; // characters limit
  //   if (expanded[id] || text.length <= limit) return text;
  //   return text.substring(0, limit) + "...";
  // };

  return (

    <div style={{ padding: "20px" }}>
      <div className="d-flex justify-content-between">
      <div>
      <input
        type="text"
        placeholder="Search tasks..."
        // value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />
</div>

 <div className="dropdown">
      <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filter === "all"
              ? "All Tasks"
              : filter === "completed"
              ? "Completed"
              : "Incompleted"}
          </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("all")}
              >
                All Tasks
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("incompleted")}
              >
                Incompleted
              </button>
            </li>
          </ul>
    </div>
</div>
      <h2>All Tasks</h2>
      {filteredTodos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        <div className="row">
          {filteredTodos.map((todo) => (
            <div  key={todo.id} className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>{todo.name}</strong></h5>
                  <p className="card-text">
                    {todo.description}
                    {/* {truncateText(todo.description, todo.id)}
                    {todo.description.length > 50 && (
                      <span
                        style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [todo.id]: !prev[todo.id],
                          }))
                        }
                      >
                        {expanded[todo.id] ? " Show less" : " Read more"}
                      </span>
                    )} */}
                    </p>
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

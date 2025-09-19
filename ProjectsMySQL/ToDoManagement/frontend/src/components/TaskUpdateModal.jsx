import React,{useState,useEffect} from 'react'

const TaskUpdateModal = ({ show, handleClose, handleUpdate, task }) => {
      const [formData, setFormData] = useState({
    task_name: "",
    task_description: "",
    is_complete: 0,
    start_date: "",
    end_date: "",
  });

// Load selected task data into form when modal opens
  useEffect(() => {
    console.log(task)
    if (task) {
      setFormData({
        task_name: task.task_name || "",
        task_description: task.task_description || "",
        is_complete: task.is_complete || 0,
        start_date: task.start_date ? task.start_date.slice(0, 10) : "",
        end_date: task.end_date ? task.end_date.slice(0, 10) : "",
      });
    }
  }, [task]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleUpdateForm = async (e) => {
    e.preventDefault();
    console.log("^^^^^^^^^^^^^^^^^^^^^^^")
        handleUpdate(task.id, formData)
    // try {
    //   await axios.put(`http://localhost:5000/api/tasks/${task.id}`, formData);
    //   alert("Task updated successfully!");
    //   fetchTasks(); // refresh tasks list
    //   handleClose(); // close modal
    // } catch (error) {
    //   console.error("Error updating task:", error);
    //   alert("Failed to update task.");
    // }
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ background: show ? "rgba(0,0,0,0.5)" : "transparent" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header">
            <h5 className="modal-title">Update Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>

          {/* Body */}
          <div className="modal-body">
            <form onSubmit={handleUpdateForm}>
              <div className="mb-3">
                <label className="form-label">Task Name</label>
                <input
                  type="text"
                  name="task_name"
                  className="form-control"
                  value={formData.task_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="task_description"
                  className="form-control"
                  rows="3"
                  value={formData.task_description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                  name="is_complete"
                  className="form-select"
                  value={formData.is_complete}
                  onChange={handleChange}
                >
                  <option value={0}>Incomplete</option>
                  <option value={1}>Complete</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  className="form-control"
                  value={formData.start_date}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  name="end_date"
                  className="form-control"
                  value={formData.end_date}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Update Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskUpdateModal

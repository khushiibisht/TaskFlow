import { useState, useEffect } from "react";
import "./App.css";


const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks([...tasks, newTask]);
        setTitle("");
      })
      .catch((err) => console.error("Error creating task:", err));
  };

  const toggleComplete = (task) => {
    fetch(`${API_URL}/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
      })
      .catch((err) => console.error("Error updating task:", err));
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" })
      .then(() => setTasks(tasks.filter((t) => t._id !== id)))
      .catch((err) => console.error("Error deleting task:", err));
  };

  return (
    <div>
      <h1 className="app-title">TaskFlow</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button className="add-btn" type="submit">Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet — add one above.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-item" key={task._id}>
              <span className={`task-title ${task.completed ? "completed" : ""}`}>
                {task.title}
              </span>
              <div className="task-buttons">
                <button onClick={() => toggleComplete(task)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
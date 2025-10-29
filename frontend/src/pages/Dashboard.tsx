import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, PlusCircle } from "lucide-react";

type Task = {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchTasks();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Please enter a task title");

    try {
      if (editingTask) {
        await API.put(
          `/tasks/${editingTask._id}`,
          { title, description },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await API.post(
          "/tasks",
          { title, description },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }
      setTitle("");
      setDescription("");
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description || "");
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await API.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/"); 
};


  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>PrimeTask Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Add Task */}
      <div className="add-task">
        <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
        <form onSubmit={handleAddOrUpdate}>
          <input
            type="text"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">
            <PlusCircle size={18} style={{ marginRight: "6px" }} />
            {editingTask ? "Update" : "Add"}
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className="task-list">
        <h2>Your Tasks</h2>
        {loading ? (
          <p className="empty-msg">Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="empty-msg">No tasks yet. Add your first one!</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} className="task-card">
              <div className="task-info">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
              </div>
              <div className="task-actions">
                <button onClick={() => handleEdit(task)}>
                  <Edit size={18} />
                </button>
                <button onClick={() => handleDelete(task._id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;

"use client";

import { useState } from "react";
import { Star, Trash2 } from "lucide-react";

export default function TodoPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Meeting with CEO", completed: false, star: false },
    { id: 2, text: "Pick up kids from school", completed: false, star: true },
    { id: 3, text: "Shopping with Brother", completed: false, star: false },
    { id: 4, text: "Review with HR", completed: true, star: false },
    { id: 5, text: "Going to Dia's School", completed: false, star: false },
    { id: 6, text: "Check design files", completed: false, star: true },
    { id: 7, text: "Update File", completed: false, star: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleStar = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, star: !task.star } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
      star: false,
    };

    setTasks([...tasks, newItem]);
    setNewTask("");
    setShowModal(false);
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen w-full px-4">
            <h1 className="text-3xl font-bold mb-6">To Do List</h1>

      <div className="w-full max-w-[1190px] mx-auto bg-white rounded-xl shadow-sm p-5 md:p-8">

       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            List
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium"
          >
            Add New Task
          </button>
        </div>
 
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">

          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between px-5 py-4 rounded-lg border transition
              ${
                task.completed
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >

              <div className="flex items-center gap-4">

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-4 h-4"
                />

                <p className="text-sm break-words">
                  {task.text}
                </p>

              </div>

              <div className="flex items-center gap-5">

                <Star
                  onClick={() => toggleStar(task.id)}
                  className={`cursor-pointer
                  ${
                    task.star
                      ? "text-yellow-400 fill-yellow-400"
                      : task.completed
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                  size={18}
                />

                <Trash2
                  onClick={() => deleteTask(task.id)}
                  className={`cursor-pointer ${
                    task.completed ? "text-white" : "text-gray-400"
                  }`}
                  size={18}
                />

              </div>

            </div>
          ))}

        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg w-[90%] max-w-[400px]">

            <h2 className="text-lg font-semibold mb-4">
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={addTask}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add Task
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
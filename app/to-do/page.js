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
    <div className="bg-[#F5F6FA] dark:bg-[#0f172a] min-h-screen w-full px-6 py-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
  <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
    To Do List
  </h1>

  <button
    onClick={() => setShowModal(true)}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
  >
    Add New Task
  </button>
</div>
 
        <div className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">

          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between px-4 py-5 transition rounded-lg
              ${
                task.completed
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-200 dark:bg-[#334155] border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-[#475569]"
              }`}
            >

              <div className="flex items-center gap-3">

                <div
                  onClick={() => toggleComplete(task.id)}
                  className={`w-[18px] h-[18px] flex items-center justify-center cursor-pointer rounded-sm border
                  ${
                    task.completed
                    ? "bg-white border-white"
                    : "border-gray-400 bg-transparent"
                  }`}
                >
                {task.completed && (
                <svg width="12" height="12" viewBox="0 0 20 20">
                <path
                  d="M5 10L8 13L15 6"
                  stroke="#3B82F6"  
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                </svg>
                )}
               </div>

                <p className="text-sm break-words text-gray-800 dark:text-gray-200">
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
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                  size={18}
                />

                <Trash2
                  onClick={() => deleteTask(task.id)}
                  className={`cursor-pointer ${
                    task.completed ? "text-white" : "text-gray-400 dark:text-gray-500"
                  }`}
                  size={18}
                />

              </div>

            </div>
          ))}

        </div>
      

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white dark:bg-[#1e293b] p-6 rounded-lg w-[90%] max-w-[400px] text-gray-800 dark:text-white">

            <h2 className="text-lg font-semibold mb-4">
              Add New Task
            </h2>

            <input
              type="text"
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full border px-4 py-2 rounded mb-4 bg-white dark:bg-[#334155] text-gray-800 dark:text-white border-gray-200 dark:border-gray-600"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#2a3a4f]"
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
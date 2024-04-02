import { TaskList } from "./TaskList"
import { TaskForm } from "./TaskForm"
import { tasks as data } from './tasks'
import { useState, useEffect } from "react";
export function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, []);

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "algo nuevo",
    }]);
  }
  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  )
}


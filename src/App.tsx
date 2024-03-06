import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { useState } from "react";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  //BLL
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
    { id: 5, title: "Typescript", isDone: false },
    { id: 6, title: "RTK query", isDone: false },
  ]);
  const removeTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(filteredTasks);
  };
  let tasksForTodolist = tasks;
  const changeFilter = (filter: FilterValuesType) => {
    setFilter(filter);
  };
  const [filter, setFilter] = useState("all");
  if (filter === "active") {
    tasksForTodolist = tasks.filter((task) => !task.isDone);
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((task) => task.isDone);
  }

  //UI
  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;

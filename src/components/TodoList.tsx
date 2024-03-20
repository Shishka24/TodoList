import { useState } from "react";
import { ListOfTasks, TaskType } from "./ListOfTasks";
import { v1 } from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export const TodoList2 = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Redux", isDone: false },
    { id: v1(), title: "Typescript", isDone: false },
    { id: v1(), title: "RTK query", isDone: false },
  ]);
  const removeTask = (taskId: string) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(filteredTasks);
  };
  let tasksForTodolist = tasks;
  const [filter, setFilter] = useState<FilterValuesType>("all");
  if (filter === "active") {
    tasksForTodolist = tasks.filter((task) => !task.isDone);
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((task) => task.isDone);
  }
  const changeFilter = (filter: FilterValuesType) => {
    setFilter(filter);
    console.log(changeFilter);
  };
  const addTask = (title: string) => {
    const newTask = {
      id: v1(),
      title,
      isDone: false,
    };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };
  const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
    // const task = tasks.find((el) => el.id === taskId);
    // if (task) {
    //   task.isDone = !task.isDone;
    //   setTasks([...tasks]);
    // }
    const updatedState = tasks.map((el) =>
      el.id === taskId ? { ...el, isDone: newIsDoneValue } : el
    );
    setTasks(updatedState);
  };
  return (
    <ListOfTasks
      title="What to learn"
      tasks={tasksForTodolist}
      removeTask={removeTask}
      changeFilter={changeFilter}
      addTask={addTask}
      filter={filter}
      changeTaskStatus={changeTaskStatus}
    />
  );
};

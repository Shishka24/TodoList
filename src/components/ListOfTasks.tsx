import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./TodoList";
import { Button } from "../Button";
import styled from "styled-components";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};
export type PropsType = {
  title: string;
  tasks: TaskType[];
  filter: FilterValuesType;
  date?: string;
  removeTask: (taskId: string) => void;
  addTask: (title: string) => void;
  changeFilter: (filter: FilterValuesType) => void;
  changeTaskStatus: (taskId: string, newIsDoneValue: boolean) => void;
};

export const ListOfTasks = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  filter,
  changeTaskStatus,
}: PropsType) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState<boolean>(false);
  const addTaskHandler = () => {
    const trimTaskTitle = taskTitle.trim();
    if (trimTaskTitle) {
      addTask(taskTitle);
    } else {
      setError(true);
    }
    setTaskTitle("");
  };
  const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setTaskTitle(event.currentTarget.value);
  };
  const addTaskOnKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTaskHandler();
    }
  };
  const changeFilterTaskHandler = (filter: FilterValuesType) => {
    changeFilter(filter);
  };
  return (
    <StyledDiv>
      <input
        value={taskTitle}
        onChange={changeTaskTitleHandler}
        onKeyUp={addTaskOnKeyHandler}
      />
      <Button title={"+"} onClickHandler={addTaskHandler} />
      {!tasks.length && <div>Please, enter the title</div> ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            const removeTaskHandler = () => {
              removeTask(task.id);
            };
            const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              changeTaskStatus(task.id, e.currentTarget.checked);
            };
            return (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.isDone}
                  onChange={changeStatusHandler}
                />
                <span className={task.isDone ? "task-done" : "task"}>
                  {task.title}
                </span>
                <Button title={"x"} onClickHandler={removeTaskHandler} />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button
          classes={filter === "all" ? "btn-active" : ""}
          title={"All"}
          onClickHandler={() => changeFilterTaskHandler("all")}
        />
        <Button
          classes={filter === "active" ? "btn-active" : ""}
          title={"Active"}
          onClickHandler={() => changeFilterTaskHandler("active")}
        />
        <Button
          classes={filter === "completed" ? "btn-active" : ""}
          title={"Completed"}
          onClickHandler={() => changeFilterTaskHandler("completed")}
        />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: #15cf15;
  border-radius: 5px;
`;

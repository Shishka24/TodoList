import React from "react";
import { Button } from "./Button";
import { FilterValuesType } from "./App";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
  removeTask: (taskId: number) => void;
  changeFilter: (filter: FilterValuesType) => void;
};

export const Todolist = ({
  title,
  tasks,
  removeTask,
  changeFilter,
}: PropsType) => {
  return (
    <div>
      <input />
      <Button title={"+"} />
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button
                  title={"x"}
                  onClickHandler={() => removeTask(task.id)}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} onClickHandler={() => changeFilter("all")} />
        <Button
          title={"Active"}
          onClickHandler={() => changeFilter("active")}
        />
        <Button
          title={"Completed"}
          onClickHandler={() => changeFilter("completed")}
        />
      </div>
    </div>
  );
};

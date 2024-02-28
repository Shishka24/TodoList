import React from "react";
import { Button } from "./Button";

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
};

export const Todolist = ({ title, tasks }: PropsType) => {
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
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} />
        <Button title={"Active"} />
        <Button title={"Completed"} />
      </div>
    </div>
  );
};

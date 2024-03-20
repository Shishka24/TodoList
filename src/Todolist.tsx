// import React, { ChangeEvent, KeyboardEvent, useState } from "react";
// import { Button } from "./Button";
// import { FilterValuesType } from "./App";

// export type TaskType = {
//   id: string;
//   title: string;
//   isDone: boolean;
// };

// export type PropsType = {
//   title: string;
//   tasks: TaskType[];
//   date?: string;
//   removeTask: (taskId: string) => void;
//   addTask: (title: string) => void;
//   changeFilter: (filter: FilterValuesType) => void;
// };

// export const Todolist = ({
//   title,
//   tasks,
//   removeTask,
//   changeFilter,
//   addTask,
// }: PropsType) => {
//   const [taskTitle, setTaskTitle] = useState("");
//   const addTaskHandler = () => {
//     addTask(taskTitle);
//     setTaskTitle("");
//   };
//   const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
//     setTaskTitle(event.currentTarget.value);
//   };
//   const addTaskOnKeyHandler = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       addTaskHandler();
//     }
//   };
//   const changeFilterTaskHandler = (filter: FilterValuesType) => {
//     changeFilter(filter);
//   };
//   const changeTaskStatus = (taskId:string) => {
//     const task=tasks.find(e => e.id === taskId)
//     if(task){
//       task.isDone = !task.isDone
//       setTask
//     }

//   };

//   return (
//     <div>
//       <input
//         value={taskTitle}
//         onChange={changeTaskTitleHandler}
//         onKeyUp={addTaskOnKeyHandler}
//       />
//       <Button title={"+"} onClickHandler={addTaskHandler} />
//       {tasks.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => {
//             const removeTaskHandler = () => {
//               removeTask(task.id);
//             };
//             return (
//               <li key={task.id}>
//                 <input type="checkbox" checked={task.isDone} />
//                 <span>{task.title}</span>
//                 <Button title={"x"} onClickHandler={removeTaskHandler} />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//       <div>
//         <Button
//           title={"All"}
//           onClickHandler={() => changeFilterTaskHandler("all")}
//         />
//         <Button
//           title={"Active"}
//           onClickHandler={() => changeFilterTaskHandler("active")}
//         />
//         <Button
//           title={"Completed"}
//           onClickHandler={() => changeFilterTaskHandler("completed")}
//         />
//       </div>
//     </div>
//   );
// };

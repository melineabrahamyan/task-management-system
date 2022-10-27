import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Context } from "../../context";

export default function TaskDetails() {
  const { taskId } = useParams();
  const { pathname } = useLocation();

  const pathArray = pathname.split("/");
  const board = pathArray[pathArray.length - 2];

  const { state } = useContext(Context);

  const task = state[board].find((task) => task.id === Number(taskId));
  const { id, title, description, status, category, priority } = task;

  return (
    <>
      <div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>description: {description}</div>
        <div>status: {status}</div>
        <div>category: {category}</div>
        <div>priority: {priority}</div>
      </div>
    </>
  );
}

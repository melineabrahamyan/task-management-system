import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

export default function Task({ id, title, description, priority }) {
  const navigate = useNavigate();
  const handleVisit = () => {
    navigate(`${id}`);
  };

  const { dispatch } = useContext(Context);
  const handleDelete = () => {
    dispatch({ type: "DELETE_TASK", payload: { id } });
  };

  return (
    <div className="task">
      <div>title: {title}</div>
      <div>description: {description}</div>
      <div>priority {priority}</div>
      <button onClick={handleVisit}>visit</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

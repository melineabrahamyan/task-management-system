import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import "./../components/board/style.css";

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
      <div className="visit-delete-btns">
        <button className="visit-delete" onClick={handleVisit}>
          visit
        </button>
        <button className="visit-delete" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
}

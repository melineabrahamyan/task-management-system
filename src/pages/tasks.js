import { useContext, useState } from "react";
import { Context } from "../context";
import Task from "./task";
import "./../components/board/style.css";
import isValid from "../helpers/validation";

export default function Tasks({ status, tasks, board }) {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("low");

  const [inAddMode, setInAddMode] = useState(false);

  const { dispatch } = useContext(Context);

  const handleSave = () => {
    if (isValid(titleValue) && isValid(descriptionValue)) {
      dispatch({
        type: "ADD_TASK",
        payload: {
          status,
          board,
          title: titleValue,
          description: descriptionValue,
          priority: priorityValue,
        },
      });
      setTitleValue("");
      setDescriptionValue("");
      setPriorityValue("");
      setInAddMode(false);
    }
  };

  return (
    <div className="single-board">
      <h2>{status}</h2>
      {tasks.map((task) => {
        return (
          <>
            <Task key={status} {...task} />
          </>
        );
      })}
      {inAddMode ? (
        <div className="task">
          <div>
            <input
              className="title-desc-input"
              placeholder="title"
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="title-desc-input"
              placeholder="description"
              onChange={(e) => {
                setDescriptionValue(e.target.value);
              }}
            />
          </div>
          <div>
            priority:{" "}
            <select
              className="priority-select"
              value={priorityValue}
              onChange={(e) => setPriorityValue(e.target.value)}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <div className="visit-delete-btns">
            <button className="visit-delete" onClick={handleSave}>
              Save
            </button>
            <button
              className="visit-delete"
              onClick={() => setInAddMode(false)}
            >
              cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="add-btn-wrapper">
          <button className="add-btn" onClick={() => setInAddMode(true)}>
            +
          </button>
        </div>
      )}
    </div>
  );
}

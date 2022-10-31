import { useContext, useState } from "react";
import { Context } from "../context";
import Task from "./task";

export default function Tasks({ status, tasks, board }) {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("");

  const [inAddMode, setInAddMode] = useState(false);

  const { dispatch } = useContext(Context);

  const handleSave = () => {
    if (titleValue && descriptionValue && priorityValue) {
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
    <div className="tasks">
      <h2>{status}</h2>
      {tasks.map((task) => {
        return (
          <>
            <Task key={status} {...task} />
          </>
        );
      })}
      {inAddMode ? (
        <div>
          <div>
            <input
              placeholder="title"
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="description"
              onChange={(e) => {
                setDescriptionValue(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="priority"
              onChange={(e) => {
                setPriorityValue(e.target.value);
              }}
            />
          </div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setInAddMode(false)}>cancel</button>
        </div>
      ) : (
        <button onClick={() => setInAddMode(true)}>Add task</button>
      )}
    </div>
  );
}

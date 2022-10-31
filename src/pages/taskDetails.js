import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./../context";

export default function TaskDetails() {
  const { taskId } = useParams();

  const { state, dispatch } = useContext(Context);

  const task = state.boards.find((task) => task.id === Number(taskId));
  const { id, title, description, status, category, priority } = task;

  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [statusValue, setStatusValue] = useState(status);
  const [categoryValue, setCategoryValue] = useState(category);
  const [priorityValue, setPriorityValue] = useState(priority);

  const [inEditMode, setInEditMode] = useState(false);

  const handleSave = () => {
    console.log(Boolean(titleValue && descriptionValue && priorityValue));
    if (titleValue && descriptionValue && priorityValue) {
      dispatch({
        type: "EDIT_TASK",
        payload: {
          id,
          status: statusValue,
          category: categoryValue,
          title: titleValue,
          description: descriptionValue,
          priority: priorityValue,
        },
      });

      setInEditMode(false);
    }
  };

  return (
    <>
      {inEditMode ? (
        <div>
          <div>
            title:{" "}
            <input
              value={titleValue}
              onChange={(e) => {
                setTitleValue(e.target.value);
              }}
            />
          </div>
          <div>
            description:{" "}
            <input
              value={descriptionValue}
              onChange={(e) => {
                setDescriptionValue(e.target.value);
              }}
            />
          </div>
          <div>
            status:{" "}
            <input
              value={statusValue}
              onChange={(e) => {
                setStatusValue(e.target.value);
              }}
            />
          </div>
          <div>
            category:{" "}
            <input
              value={categoryValue}
              onChange={(e) => {
                setCategoryValue(e.target.value);
              }}
            />
          </div>
          <div>
            priority:{" "}
            <input
              value={priorityValue}
              onChange={(e) => {
                setPriorityValue(e.target.value);
              }}
            />
          </div>
          <button onClick={handleSave}>save</button>
          <button onClick={() => setInEditMode(false)}>cancel</button>
        </div>
      ) : (
        <div>
          <div>title: {title}</div>
          <div>description: {description}</div>
          <div>status: {status}</div>
          <div>category: {category}</div>
          <div>priority: {priority}</div>
          <button onClick={() => setInEditMode(true)}>edit</button>
        </div>
      )}
    </>
  );
}

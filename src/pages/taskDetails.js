import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import LoginButton from "../components/login/loginButton";
import { Context } from "./../context";
import "./taskDetails.css";

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
      {state.userInfo.isLoggedIn ? (
        <>
          {inEditMode ? (
            <>
              <div className="details-container">
                <h1>Task Details</h1>
                <div className="details">
                  <div className="detail">
                    title:{" "}
                    <input
                      className="detail-input"
                      value={titleValue}
                      onChange={(e) => {
                        setTitleValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="detail">
                    description:{" "}
                    <input
                      className="detail-input"
                      value={descriptionValue}
                      onChange={(e) => {
                        setDescriptionValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="detail">
                    status:{" "}
                    <select
                      className="detail-input select"
                      value={statusValue}
                      onChange={(e) => setStatusValue(e.target.value)}
                    >
                      <option value="done">done</option>
                      <option value="doing">doing</option>
                      <option value="todo">todo</option>
                    </select>
                  </div>
                  <div className="detail">
                    category:{" "}
                    <input
                      className="detail-input"
                      value={categoryValue}
                      onChange={(e) => {
                        setCategoryValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className="detail">
                    priority:{" "}
                    <select
                      className="detail-input select"
                      value={priorityValue}
                      onChange={(e) => setPriorityValue(e.target.value)}
                    >
                      <option value="low">low</option>
                      <option value="medium">medium</option>
                      <option value="high">high</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="save-cancel-btns">
                <button className="save-cancel" onClick={handleSave}>
                  save
                </button>
                <button
                  className="save-cancel"
                  onClick={() => setInEditMode(false)}
                >
                  cancel
                </button>
              </div>
            </>
          ) : (
            <div className="details-container">
              <h1>Task Details</h1>
              <div className="details">
                <div className="detail">title: {title}</div>
                <div className="detail">description: {description}</div>
                <div className="detail">status: {status}</div>
                <div className="detail">category: {category}</div>
                <div className="detail">priority: {priority}</div>
              </div>
              <button
                className="edit-button"
                onClick={() => setInEditMode(true)}
              >
                edit
              </button>
            </div>
          )}
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

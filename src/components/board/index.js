import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import Tasks from "../../pages/tasks";
import LoginButton from "../login/loginButton";
import "./style.css";

export default function Board() {
  const { board } = useParams();
  const { state } = useContext(Context);

  const boardData = state.boards
    .filter((task) => task.category === board)
    .reduce(
      (aggr, task) => {
        aggr[task.status]?.push(task);
        return aggr;
      },
      { done: [], doing: [], todo: [] }
    );

  return (
    <>
      {state.userInfo.isLoggedIn ? (
        <>
          <h1>{board}</h1>
          <div className="board-wrapper">
            {Object.keys(boardData).map((status, index) => (
              <Tasks
                key={index}
                status={status}
                tasks={boardData[status]}
                board={board}
              />
            ))}
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

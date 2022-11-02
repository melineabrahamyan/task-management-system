import "./style.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import LoginButton from "../login/loginButton";

export default function Home() {
  const { state } = useContext(Context);

  const navigate = useNavigate();
  const handleClcik = (board) => {
    navigate(`/boards/${board}`);
  };

  const boards = state.boards.reduce((aggr, board) => {
    aggr[board.category] = aggr[board.category]
      ? [...aggr[board.category], board]
      : [board];
    return aggr;
  }, {});

  return (
    <div>
      {state.userInfo.isLoggedIn ? (
        <>
          <h1>Your Boards</h1>
          <div className="boards">
            {Object.keys(boards).map((board) => (
              <div
                className="board"
                onClick={() => {
                  handleClcik(board);
                }}
              >
                <h2>{board}</h2>
              </div>
            ))}
          </div>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

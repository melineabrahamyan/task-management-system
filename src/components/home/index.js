import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

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
      {Object.keys(boards).map((board) => (
        <div
          onClick={() => {
            handleClcik(board);
          }}
        >
          {board}
        </div>
      ))}
    </div>
  );
}

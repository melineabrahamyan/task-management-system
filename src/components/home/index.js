import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

export default function Home() {
  const { state } = useContext(Context);

  const navigate = useNavigate();
  const handleClcik = (board) => {
    navigate(`/boards/${board}`);
  };
  return (
    <div>
      {Object.keys(state).map((board) => (
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

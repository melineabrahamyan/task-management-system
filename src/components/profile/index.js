import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";

export default function Profile() {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Context);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const [inCreateMode, setInCreateMode] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const handleNewBoard = () => {
    setInCreateMode(true);
  };

  return (
    <>
      <div>{userInfo.username}</div>
      <div>
        <button onClick={handleClick}>see boards</button>
      </div>
      {inCreateMode ? (
        <div>
          <input
            placeholder="board name"
            onChange={(e) => setNewBoardName(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch({ type: "ADD_BOARD", payload: { newBoardName } });
              setInCreateMode(false);
            }}
          >
            save
          </button>
          <button onClick={() => setInCreateMode(false)}>cancel</button>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={handleNewBoard}>create new board</button>
        </div>
      )}
    </>
  );
}

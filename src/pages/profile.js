import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";

export default function Profile() {
  const {
    state: { userInfo },
  } = useContext(Context);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const handleNewBoard = () => {};
  return (
    <>
      <div>{userInfo.username}</div>
      <button onClick={handleNewBoard}>create new board</button>
      <button onClick={handleClick}>see boards</button>
    </>
  );
}

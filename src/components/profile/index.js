import "./style.css";
import profile from "./../login/images/a.png";
import { useContext, useState } from "react";

import { Context } from "../../context";
import LoginButton from "../login/loginButton";
import isValid from "../../helpers/validation";

export default function Profile() {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Context);

  const [inCreateMode, setInCreateMode] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const handleNewBoard = () => {
    setInCreateMode(true);
  };

  const handleSave = () => {
    if (isValid(newBoardName)) {
      dispatch({
        type: "ADD_BOARD",
        payload: { newBoardName },
      });
      setInCreateMode(false);
    }
  };
  return (
    <>
      {userInfo.isLoggedIn ? (
        <div className="container">
          <div className="header">
            <div className="img-wrapper">
              <img src={profile} className="profile-img" />
            </div>

            <div className="user-info">
              <p className="about">About</p>
              <p>username: {userInfo.username}</p>
              <p>full name: Michael Jackson</p>
              <p>email: michael.jackson@gmail.com</p>

              <p>
                bio: Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
          </div>
          <div className="footer">
            {inCreateMode ? (
              <div>
                <input
                  className="board-name"
                  placeholder="Board name"
                  onChange={(e) => setNewBoardName(e.target.value)}
                />
                <div>
                  <button className="add-cancel" onClick={handleSave}>
                    save
                  </button>
                  <button
                    className="add-cancel"
                    onClick={() => setInCreateMode(false)}
                  >
                    cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button className="new-board-button" onClick={handleNewBoard}>
                  Create New Board
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <LoginButton />
      )}
    </>
  );
}

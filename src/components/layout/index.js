import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context";
import "./style.css";

export default function Layout({ children }) {
  const { dispatch } = useContext(Context);

  const activeButton = useRef();

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    activeButton.current.focus();
  };

  return (
    <>
      <div className="navbar">
        <div className="buttons">
          <button
            className="navbar-button"
            onClick={() => {
              handleNavigate("/");
            }}
          >
            Home
          </button>
          <button
            className="navbar-button"
            onClick={() => {
              handleNavigate("/profile");
            }}
          >
            Profile
          </button>
          <button
            className="navbar-button"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}

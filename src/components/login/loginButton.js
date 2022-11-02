import "./style.css";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  };

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <h1>PLEASE</h1>
          <h1 className="sign-in" onClick={handleClick}>
            SIGN IN
          </h1>
        </div>
      </div>
    </div>
  );
}

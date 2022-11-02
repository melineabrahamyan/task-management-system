import "./style.css";
import profile from "./images/a.png";
import email from "./images/email.jpg";
import pass from "./images/pass.png";
import { Context } from "../../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import isValid from "../../helpers/validation";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const { dispatch } = useContext(Context);
  const handleLogin = () => {
    if (isValid(username) && isValid(password)) {
      dispatch({ type: "LOGIN", payload: { username, password } });
      navigate("/profile");
    }
  };
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="text"
                  placeholder="user name"
                  className="name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  placeholder="password"
                  className="name"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login">
                <button className="login-button" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

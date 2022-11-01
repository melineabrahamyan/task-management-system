import { Context } from "../../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const { dispatch } = useContext(Context);
  const handleLogin = () => {
    if (username && password) {
      dispatch({ type: "LOGIN", payload: { username, password } });
      navigate("/profile");
    }
  };
  return (
    <div>
      <div>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>sign in</button>
    </div>
  );
}

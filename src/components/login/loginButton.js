import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in");
  };
  return <button onClick={handleClick}>Sign-in</button>;
}

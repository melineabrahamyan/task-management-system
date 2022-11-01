import { useNavigate } from "react-router-dom";

export default function ProfileButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  };
  return <button onClick={handleClick}>go to profile</button>;
}

import { useNavigate } from "react-router-dom";

export default function Task({ id, title, category, description }) {
  const navigate = useNavigate();

  const handleVisit = () => {
    navigate(`${id}`);
  };

  const handleDelete = (id) => {};
  return (
    <div className="task">
      <div>title: {title}</div>
      <div>category: {category}</div>
      <div>description: {description}</div>
      <button onClick={handleVisit}>visit</button>
      <button>delete</button>
    </div>
  );
}

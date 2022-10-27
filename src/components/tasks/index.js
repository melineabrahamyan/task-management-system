import Task from "../task";

export default function Tasks({ status, tasks }) {
  return (
    <div className="tasks">
      <h2>{status}</h2>
      {tasks.map((task) => (
        <Task key={status} {...task} />
      ))}
      <button>Add task</button>
    </div>
  );
}

import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import Tasks from "../tasks";

export default function Board() {
  const { board } = useParams();
  const { state } = useContext(Context);

  const data = state[board].reduce((aggr, task) => {
    aggr[task.status] = aggr[task.status]
      ? [...aggr[task.status], task]
      : [task];
    return aggr;
  }, {});

  return (
    <>
      <h2>{board}</h2>
      {Object.keys(data).map((key, index) => (
        <Tasks key={index} status={key} tasks={data[key]} />
      ))}
    </>
  );
}

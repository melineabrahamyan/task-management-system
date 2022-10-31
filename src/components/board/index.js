import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context";
import Tasks from "../../pages/tasks";

export default function Board() {
  const { board } = useParams();
  const { state } = useContext(Context);

  const BoardData = state.boards
    .filter((task) => task.category === board)
    .reduce((aggr, task) => {
      aggr[task.status] = aggr[task.status]
        ? [...aggr[task.status], task]
        : [task];
      return aggr;
    }, {});
  return (
    <>
      <h2>{board}</h2>
      <div className="board">
        {Object.keys(BoardData).map((key, index) => (
          <Tasks
            key={index}
            status={key}
            tasks={BoardData[key]}
            board={board}
          />
        ))}
      </div>
    </>
  );
}

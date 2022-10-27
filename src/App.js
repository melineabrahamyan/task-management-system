import "./App.css";
import Provider from "./context";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Board from "./components/board";
import TaskDetails from "./components/taskDetails";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boards/:board" element={<Board />} />
          <Route path="boards/:board/:taskId" element={<TaskDetails />} />
          {/* <Route path="/profile" element={<Login />} /> */}
          {/* <Route path="/sign-in" element={<Login />} /> */}
        </Routes>
      </Provider>
    </>
  );
}

export default App;

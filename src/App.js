import "./App.css";
import Provider from "./context";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Board from "./components/board";
import TaskDetails from "./pages/taskDetails";
import Profile from "./components/profile";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Provider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/boards/:board"
            element={
              <Layout>
                <Board />
              </Layout>
            }
          />

          <Route
            path="boards/:board/:taskId"
            element={
              <Layout>
                <TaskDetails />
              </Layout>
            }
          />

          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />

          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;

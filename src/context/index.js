import { createContext, useReducer } from "react";
import { boards } from "./data";
import { reducer } from "./reducer";

export const Context = createContext(boards);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    userInfo: { isLoggedIn: false, username: null, password: null },
    boards,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

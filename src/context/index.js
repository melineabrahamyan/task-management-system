import { createContext, useReducer } from "react";
import { boards } from "./data";
import { reducer } from "./reducer";

export const Context = createContext(boards);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, { isLoggedIn: false, boards });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

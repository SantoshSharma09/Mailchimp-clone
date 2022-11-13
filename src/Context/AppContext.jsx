import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

  function toggleAuth() {
    setAuth(!isAuth);
  }

  return (
    <AppContext.Provider value={{ isAuth, toggleAuth, token, setToken }}>
      {children}
    </AppContext.Provider>
  );
}

import { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const data = {
    name: "salman",
    age: 22,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };

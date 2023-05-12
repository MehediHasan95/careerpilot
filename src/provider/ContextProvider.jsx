/* eslint-disable react/prop-types */
import { createContext } from "react";
import useJobs from "../hooks/useJobs";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [jobs] = useJobs();

  const data = { jobs };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default ContextProvider;

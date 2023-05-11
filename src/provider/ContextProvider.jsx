/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const data = { jobs };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default ContextProvider;

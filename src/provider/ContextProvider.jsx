/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getApplyingJobs } from "../utilities/fakedb";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const getStoreJobs = getApplyingJobs();

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const data = { jobs, getStoreJobs };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default ContextProvider;

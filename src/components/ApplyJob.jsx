import { useContext, useEffect, useState } from "react";
import { MyContext } from "../provider/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ApplyJob = () => {
  const { jobs, getStoreJobs } = useContext(MyContext);
  const [allApplyJobs, setAllApplyJobs] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  useEffect(() => {
    let applyJobs = [];
    for (const id in getStoreJobs) {
      const addedJobs = jobs.find((e) => e.id === id);
      if (addedJobs) {
        const isApply = getStoreJobs[id];
        addedJobs.isApply = isApply;
        applyJobs.push(addedJobs);
      }
    }
    setAllApplyJobs(applyJobs);
    setSortBy(applyJobs);
  }, [getStoreJobs, jobs]);

  const handleFIlterByData = (e) => {
    let boolValue = /true/.test(e.target.value);
    setSortBy(allApplyJobs.filter((e) => e.remote === boolValue));
  };

  return (
    <div className="px-2 lg:px-32">
      <div className="flex justify-end py-5">
        <select
          onChange={handleFIlterByData}
          className="border-none outline-none p-3 cursor-pointer rounded-md"
        >
          <option value={null} selected disabled>
            Filter By
          </option>
          <option value={true}>Remote Job</option>
          <option value={false}>Onsite Job</option>
        </select>
      </div>
      <div>
        {sortBy.map((e) => (
          <div
            key={e.id}
            className="flex items-center mb-5 p-3 bg-base-100 rounded-md"
          >
            <div className="w-32 h-32 p-2 flex justify-center items-center border rounded-md">
              <img
                src={e.image}
                alt="icons"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-5 w-full flex justify-between items-start lg:items-center flex-col lg:flex-row">
              <div>
                <h1 className="text-xl font-bold">{e.title}</h1>
                <p>{e.company}</p>
                <div className="my-2">
                  <button className="border border-customBlue text-customBlue py-1 px-5 rounded-md me-1">
                    {e.remote ? "Remote" : "Onsite"}
                  </button>
                  <button className="border border-customBlue text-customBlue py-1 px-5 rounded-md ms-1">
                    {e.full_time ? "Full Time" : "Part Time"}
                  </button>
                </div>
                <span className="me-3">
                  <FontAwesomeIcon icon={faLocationDot} /> {e.location}
                </span>
                <span className="ms-3">
                  <FontAwesomeIcon icon={faSackDollar} /> {e.salary}
                </span>
              </div>
              <Link to={`/jobdetail/${e.id}`}>
                <button className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;

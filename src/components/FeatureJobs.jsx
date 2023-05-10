import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [limit]);

  const handleSeeMore = () => {
    setLimit(jobs.length);
  };

  return (
    <section className="px-2 lg:px-32 mt-24">
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold mb-2">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="grid gap-5 lg:grid-cols-2">
          {jobs.slice(0, limit).map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>

        {jobs.slice(0, limit).length === 4 && (
          <div className="my-8 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md"
            >
              See All Jobs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureJobs;

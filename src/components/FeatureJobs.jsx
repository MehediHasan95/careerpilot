import { useEffect, useState } from "react";
import Job from "./Job";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <section className="px-2 lg:px-32 mt-24 border">
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold mb-2">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="grid gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureJobs;

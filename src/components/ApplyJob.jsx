import useApplyJob from "../hooks/useApplyJob";

const ApplyJob = () => {
  const applyJobs = useApplyJob();
  console.log(applyJobs);
  return (
    <div>
      <h1>Apply Job</h1>
    </div>
  );
};

export default ApplyJob;

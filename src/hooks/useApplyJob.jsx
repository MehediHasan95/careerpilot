import { getApplyingJobs } from "../utilities/fakedb";

const useApplyJob = async () => {
  const loadedProducts = await fetch("jobs.json");
  const products = await loadedProducts.json();

  let applyJob = [];
  const getJobs = getApplyingJobs();

  for (const id in getJobs) {
    const addedJobs = products.find((e) => e.id === id);
    if (addedJobs) {
      const isApply = getJobs[id];
      addedJobs.isApply = isApply;
    }
    applyJob.push(addedJobs);
  }
  console.log(applyJob);
  return applyJob;
};

export default useApplyJob;

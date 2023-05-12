import { toast } from "react-hot-toast";

// use local storage to manage cart data
const addToDb = (id) => {
  let applyingJobs = getApplyingJobs();

  const isApply = applyingJobs[id];

  if (!isApply) {
    applyingJobs[id] = true;
    toast.success("The application was successful");
  } else {
    toast.error("You have already applied to this job");
  }
  localStorage.setItem("applying-jobs", JSON.stringify(applyingJobs));
};

const removeFromDb = (id) => {
  const shoppingCart = getApplyingJobs();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applying-jobs", JSON.stringify(shoppingCart));
  }
};

const getApplyingJobs = () => {
  let applyingJobs = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applying-jobs");
  if (storedCart) {
    applyingJobs = JSON.parse(storedCart);
  }
  return applyingJobs;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applying-jobs");
};

export { addToDb, removeFromDb, getApplyingJobs, deleteShoppingCart };

import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../components/ErrorPage";
import Statistics from "../components/Statistics";
import ApplyJob from "../components/ApplyJob";
import Blog from "../components/Blog";
import Home from "../components/Home";
import JobDetail from "../components/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "jobs",
        element: <ApplyJob />,
      },
      {
        path: "jobdetail/:id",
        element: <JobDetail />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;

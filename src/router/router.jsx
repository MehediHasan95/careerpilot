import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../components/ErrorPage";
import Statistics from "../components/Statistics";
import ApplyJob from "../components/ApplyJob";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "jobs",
        element: <ApplyJob />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;

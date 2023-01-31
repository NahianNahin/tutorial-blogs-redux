import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogsList from "../pages/Dashboard/BlogsList";
import EditBlog from "../pages/Dashboard/EditBlog";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "reading-history",
          element: <ReadingHistory />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "/dashboard",
          element: <BlogsList/>
        },
        {
          path: "add-blog",
          element: <AddBlog />,
        },
        {
          path: "edit-blog",
          element: <EditBlog />,
        },
      ],
    },
  ]);
  
  export default routes;
  
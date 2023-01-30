import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard/Dashboard";
import Main from "../layouts/Main/Main";
import AddBlog from "../pages/Dashboard/AddBlog";
import BlogsList from "../pages/Dashboard/BlogsList";
import EditBlog from "../pages/Dashboard/EditBlog";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import TopRated from "../pages/Main/TopRated";

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
          path: "top-rated",
          element: <TopRated />,
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
  
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../form/Login";
import Register from "../form/Register";
import ErrorPage from "../pages/ErrorPage";
import DashBoard from "../Admin/DashBoard";
import AddArticles from "../pages/AddArticle/AddArticles";
import AllArticle from "../Admin/AllArticle";
import AllUsers from "../Admin/AllUsers";
import AddPublishers from "../Admin/AddPublishers";
import UserAllArticle from "../pages/UserAllArticle/UserAllArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addArticle",
        element: <AddArticles></AddArticles>,
      },
      {
        path: "userAllArticle",
        element: <UserAllArticle></UserAllArticle>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "allArticle",
        element: <AllArticle></AllArticle>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addPublisher",
        element: <AddPublishers></AddPublishers>,
      },
    ],
  },
]);

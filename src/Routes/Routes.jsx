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
import DetailsPage from "../pages/UserAllArticle/DetailsPage";
import MyArticles from "../pages/MyArticles/MyArticles";
import DashDesign from "../Admin/DashDesign";
import UserProfile from "../pages/Home/UserProfile/UserProfile";

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
      {
        path: "userAllArticle/:id",
        element : <DetailsPage></DetailsPage>,
      },
      {
        path: "myArticle",
        element: <MyArticles></MyArticles>
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard",
        element: <DashDesign></DashDesign>
      },
      {
        path: "allArticle",
        element: <AllArticle></AllArticle>,
        loader : () => fetch('http://localhost:5000/articleCount')
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

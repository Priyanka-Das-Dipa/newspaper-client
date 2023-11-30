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
import Subscription from "../pages/Subscription/Subscription";
import Payment from "../pages/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import Premium from "../pages/Home/Premium/Premium";

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
        element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>,
      },
      {
        path: "userAllArticle",
        element: <PrivateRoute><UserAllArticle></UserAllArticle>
        </PrivateRoute>,
        
      },
      {
        path: "userAllArticle/:id",
        element : <DetailsPage></DetailsPage>,
      },
      {
        path: "subscription",
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "premium",
        element: <Premium></Premium>
      },
      {
        path: "myArticle",
        element: <PrivateRoute><MyArticles></MyArticles></PrivateRoute>
      },
      {
        path: "userProfile",
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <DashDesign></DashDesign>
      },
      {
        path: "allArticle",
        element: <AllArticle></AllArticle>,
        loader : () => fetch('https://newspaper-sever-site.vercel.app/articleCount')
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

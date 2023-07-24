import {
  Navigate,
  createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Category from "../Pages/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import SignIn from "../Pages/Login $ Register/SignIn";
import SignUp from "../Pages/Login $ Register/SignUp";
import LoginLayout from "../Layout/LoginLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/Category/0"></Navigate>
      },
      {
        path: "/Login",
        element: <SignIn></SignIn>
      },
      {
        path: "/Register",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: "/Category",
    element: <Layout></Layout>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <News></News>,
        loader: ({ params }) => fetch(`http://localhost:5000/News/${params.id}`)
      }
    ]

  }
]);

export default router
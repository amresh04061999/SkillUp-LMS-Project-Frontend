import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import { SignIn } from "../features/auth/SignIn";
import { SignUp } from "../features/auth/SignUp";
import PageNotfound from "../pages/PageNotfound";

 export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index:true,element:<MainLayout/>
      },
      {
        path:'login',element:<SignIn/>
      },
      {
        path:'signUp',element:<SignUp/>
      },
      {
        path:'*',element:<PageNotfound/>
      }
    ]

  }
 ])
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Home Components/Home/Home";
import Login from "../Login and Register/Login/Login";
import Register from "../Login and Register/Register/Register";
import MyArtCraft from "../Private/MyArt&Craft";
import AddCraft from "../Private/AddCraft";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/MyArtCraft',
          element:<PrivateRoute><MyArtCraft></MyArtCraft></PrivateRoute>
        },
        {
          path:'/AddCraft',
          element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        }
       
      ]
    },
  ]);
  
  
  export default router
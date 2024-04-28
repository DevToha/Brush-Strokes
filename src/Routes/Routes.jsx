import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Home Components/Home/Home";
import Login from "../Login and Register/Login/Login";
import Register from "../Login and Register/Register/Register";
import MyArtCraft from "../Private/MyArt&Craft";
import AddCraft from "../Private/AddCraft";
import PrivateRoute from "./PrivateRoute";
import AllArtAndCraft from "../All Art and Craft Item/AllArtAndCraft";
import CraftItems from "../Home Components/Craft item section/Craft-Items";
import CraftDetails from "../Home Components/Craft item details/CraftDetails";
import ErrorPage from "../Error Page/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/MyArtCraft',
        element: <PrivateRoute><MyArtCraft></MyArtCraft></PrivateRoute>
      },
      {
        path: '/AddCraft',
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
      },
      {
        path: '/allArtAndCraft',
        element: <AllArtAndCraft></AllArtAndCraft>
      },
      {
        path: '/CraftItems',
        element: <CraftItems></CraftItems>,
        loader: () => fetch('http://localhost:5000/item')
      },
      {
        path: '/craftDetails/:_id',
        element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        // loader: () => fetch('http://localhost:5000/item')
      }

    ]
  },
]);


export default router
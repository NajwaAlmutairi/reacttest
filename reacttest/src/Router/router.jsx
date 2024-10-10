import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Book from "../pages/Book";
import SingleBook from "../pages/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
//   {
//     path: "/home",
//     element: <Home />,
//   },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/singleBook/:title",
    element: <SingleBook />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/index';
import About from '../pages/About';
import Blog from '../pages/blogs';
import Post from "../pages/blogs/_id";

import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loader"; 

import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
        loader: posts,
      },
      {
        path: '/blog/:id',
        element: <Post/>,
        loader: postById,
      }
    ]
  },
]);
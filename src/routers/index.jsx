import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/index';
import About from '../pages/About';

import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about',
        element: <About/>,
      }
    ]
  },
]);
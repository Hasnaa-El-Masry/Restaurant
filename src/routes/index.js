import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root";
import NotFound from "../pages/404";

import AboutUs from "../pages/about-us";
import Home from "../pages/home";
import Menu from "../pages/menus";
import Contact from "../pages/contact";
import OurChefs from "../pages/our-chefs";
import Reservation from "../pages/reservation";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/online-reservation", element: <Reservation /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/chefs", element: <OurChefs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

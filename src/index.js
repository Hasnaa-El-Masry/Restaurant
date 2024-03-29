import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// Styles Import:
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./styles/index.css";
import { SideNavContextProvider } from "./context/showSideContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideNavContextProvider>
      <RouterProvider router={router} />
    </SideNavContextProvider>
  </React.StrictMode>
);

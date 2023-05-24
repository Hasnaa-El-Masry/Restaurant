import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
import Overlay from "../UI/Overlay";
import { SideNavContext } from "../../context/showSideContext";

const Layout = ({ children }) => {
  const { show, setShow, toggleHandler } = useContext(SideNavContext);
  console.log(show);

  return (
    <>
      <Navbar toggleHandler={toggleHandler} />
      <aside>
        <SideNav show={show} />
      </aside>
      {show && <Overlay onClick={() => setShow(false)} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

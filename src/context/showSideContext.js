import { useState, createContext } from "react";

export const SideNavContext = createContext({ user: false });

export const SideNavContextProvider = (props) => {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <SideNavContext.Provider value={{ show, setShow, toggleHandler }}>
      {props.children}
    </SideNavContext.Provider>
  );
};

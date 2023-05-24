import React from "react";
import classes from "./classes.module.scss";

function Overlay({ onClick }) {
  return <div onClick={onClick} className={classes.overlay} />;
}

export default Overlay;

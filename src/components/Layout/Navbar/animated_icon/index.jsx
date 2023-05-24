import classes from "./classes.module.scss";

const BurgerIcon = ({ onClick }) => {
  return (
    <div className={classes.toggle} onClick={onClick || null}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BurgerIcon;

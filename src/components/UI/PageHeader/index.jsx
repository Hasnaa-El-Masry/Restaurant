import classes from "./classes.module.scss";
import SectionHeader from "../SectionHeader";

function PageHeader({ subtitle, title, src }) {
  return (
    <header className={classes.header}>
      <div className={classes.overlay}>
        <img src={src} alt="about background" />
      </div>

      <div className={classes.content}>
        <SectionHeader subtitle={subtitle} title={title} page />
      </div>
    </header>
  );
}

export default PageHeader;

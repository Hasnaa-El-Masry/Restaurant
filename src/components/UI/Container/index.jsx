import classes from './classes.module.scss';

const Container = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default Container
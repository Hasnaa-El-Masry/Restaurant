import classes from './classes.module.scss'

const AnimatedSectionBg = ({children, styles}) => {
  return (
    <section className={`${classes.animated_bg} ${styles === 'topLeft' ? classes.topLeft: ''}`}>{children}</section>
  )
}

export default AnimatedSectionBg
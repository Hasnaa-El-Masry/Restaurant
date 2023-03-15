import classes from './classes.module.scss';

const IconInput = ({icon:Icon, input:Input}) => {
  return (
    <div className={`${classes.icongroup}`} >
        <Icon className={classes.icon}/>
        <Input className={classes.input}/>
    </div>
  )
}

export default IconInput
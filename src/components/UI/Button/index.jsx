import classes from './classes.module.scss'

const Button = ({ children, onClick, variant }) => {
    return (
        <>
            <button className={`${classes.button} ${variant === 'primary' ? classes.primary : ''}`} onClick={onClick || null}>
                <div>
                    <div className={classes.layer}></div>
                    <span className={classes.text_one}>{children}</span>
                    <span className={classes.text_two}>{children}</span>
                </div>
            </button>
        </>
    )
}

export default Button
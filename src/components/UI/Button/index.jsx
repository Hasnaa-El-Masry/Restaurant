import classes from './classes.module.scss'

const Button = ({ children, onClick }) => {
    return (
        <>
            <button className={classes.button} onClick={onClick || null}>
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
import classes from './classes.module.scss'

const Image = ({ src, style }) => {

    return (
        <div className={`${classes.img_wrapper} ${style ? style : ''}`}>
            <img src={src} alt="" />
        </div>
    )
}

export default Image
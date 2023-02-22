import classes from './classes.module.scss'
import pattern_img from "../../../assets/images/line.svg";

const SectionHeader = ({ header, subtitle, title, description }) => {
    return (
        <div className={classes.container}>
            <div className={classes.subtitle}>
                {subtitle}
            </div>

            <div className={classes.pattern_img}>
                <img src={pattern_img} alt="" />
            </div>

            <div className={classes.title}>
                {header ?
                    <h1>{title}</h1> :
                    <h2>{title}</h2>
                }
            </div>

            <div className={classes.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SectionHeader
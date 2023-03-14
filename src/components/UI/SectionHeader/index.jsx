import classes from './classes.module.scss'
import pattern_img from "../../../assets/images/line.svg";
import { motion } from 'framer-motion';

const MotionWrapper = ({ children, classes, delay }) => {

    return <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay }}
        className={classes}>
        {children}
    </motion.div>

}

const SectionHeader = ({ subtitle, title, description, className }) => {
    return (
        <div className={`${classes.container} ${className ? className : ''}`}>

            <div className={classes.subtitle}>
                {subtitle}
            </div>

            <div className={classes.pattern_img}>
                <img src={pattern_img} alt="" />
            </div>

            <div className={classes.title}>
                <h2>{title}</h2>
            </div>

            {description && <div className={classes.description}>
                <p>{description}</p>
            </div>}
        </div>
    )
}

export const SectionHeaderContent = ({ header, subtitle, title, description, className }) => {

    return (
        <div className={`${classes.container} ${className ? className : ''}`}>

            <MotionWrapper classes={classes.subtitle} delay={.1}>

                {subtitle}

            </MotionWrapper>

            <MotionWrapper  classes={classes.pattern_img} delay={.1}>

                <img src={pattern_img} alt="" />

            </MotionWrapper>

            <MotionWrapper  classes={classes.title} delay={1}>
                {header ?
                    <h1>{title}</h1> :
                    <h2>{title}</h2>
                }
            </MotionWrapper>

            {description && <MotionWrapper isActive classes={classes.description} delay={1.5}>
                <p className={classes.header_desc}>{description}</p>
            </MotionWrapper>}

        </div>
    )
}

export default SectionHeader
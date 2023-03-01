import classes from './classes.module.scss'
import {TbSquareRotated} from 'react-icons/tb';

const AnimatedSquares = () => {

    return (

        <div className={classes.squares}>
            <TbSquareRotated/>
            <TbSquareRotated />
            <TbSquareRotated />
        </div>

    )
}

export default AnimatedSquares
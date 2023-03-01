import classes from './classes.module.scss'
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ children, onClose }) => {

    return (
        <div className={classes.modal} onClick={onClose}>
            <RxCross2 className={classes.exist} onClick={onClose} />
            <div className={classes.content} onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
    )
}

export default Modal
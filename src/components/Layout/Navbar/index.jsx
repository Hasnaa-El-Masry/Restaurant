import classes from './classes.module.scss';
import { BiPhone } from 'react-icons/bi';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Container from '../../UI/Container';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__top}>
                <div>
                    <ul>
                        <li><MdOutlineLocationOn /> <span> Restaurant St, Delicious City, London 9578, UK </span> </li>
                        <li><AiOutlineClockCircle /> <span>Daily : 8.00 am to 10.00 pm</span> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><BiPhone /> <span>+1 123 456 7890</span></li>
                        <li> <MdOutlineEmail /><span> booking@restaurant.com </span></li>
                    </ul>
                </div>
            </div>
            <div className={classes.nav__bottom}>
                <Container>
                    <div className={classes.nav__bottom_container}>
                        <div className={classes.toggle_icon}>
                            <GiHamburgerMenu />
                        </div>
                        <div className={classes.logo}>
                            <Link>logo</Link>
                        </div>
                        <div className={classes.action}>
                            <button>find a table</button>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar
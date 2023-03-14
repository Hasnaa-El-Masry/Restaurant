import classes from './classes.module.scss';
import { BiPhone } from 'react-icons/bi';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { TbSquareRotated } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../UI/Container';
import logo from '../../../assets/images/logo.png';
import BurgerIcon from './animated_icon';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../UI/Button';


const Navbar = () => {

    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false);
    const [scroll, setScroll] = useState({
        direction: 'down',
        scrollY: 0
    });

    const changeScrollHandler = () => {

        setScroll((crru) => {
            return {
                direction: crru.scrollY < window.scrollY ? 'down' : 'up',
                scrollY: window.scrollY
            }
        })

        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScrollHandler);
    }, [])

    return (
        <nav className={`${classes.nav} ${isScrolled ? classes.hide_nav_top : ''} ${(scroll.scrollY > 900 && scroll.direction == 'down') ? classes.hide : classes.show}`}>
            <div className={`${classes.nav__top}`}>
                <div className={classes.address}>
                    <ul>
                        <li><MdOutlineLocationOn className={classes.icon} /> <span> Restaurant St, Delicious City, London 9578, UK </span> </li>
                        <li className='primary-color'><TbSquareRotated /></li>
                        <li><AiOutlineClockCircle className={classes.icon} /> <span>Daily : 8.00 am to 10.00 pm</span> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><Link to=''><BiPhone className={classes.icon} /><span className={classes.call}>+1 123 456 7890</span></Link></li>
                        <li className='primary-color'><TbSquareRotated /></li>
                        <li> <Link to=''><MdOutlineEmail className={classes.icon} /><span>booking@restaurant.com</span> </Link></li>
                    </ul>
                </div>
            </div>
            <div className={`${classes.nav__bottom} ${isScrolled ? classes.scroll_bg : ''}`}>
                <Container>
                    <div className={classes.nav__bottom_container}>
                        <div className={classes.toggle_icon}>
                            <BurgerIcon />
                        </div>
                        <div className={classes.logo}>
                            <Link><img src={logo} /></Link>
                        </div>
                        <div className={classes.action}>
                            <Button variant='primary' onClick={() => navigate('')}>find a table</Button>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar
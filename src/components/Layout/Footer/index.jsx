import { Link } from 'react-router-dom';
import AnimatedSquares from '../../AnimatedSquares';
import Container from '../../UI/Container';
import Button from '../../UI/Button';
import classes from './classes.module.scss';
import logo from '../../../assets/images/logo.png';
import {MdOutlineEmail} from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={classes.footer}>

      <Container className={classes.container}>
        <div className={classes.content}>
          <div className={classes.pages}>
            <ul>
              <li>
                <p><Link to='/' className='link'>home</Link></p>
                <p><Link to='/' className='link'>menus</Link></p>
                <p><Link to='/' className='link'>about us</Link></p>
                <p><Link to='/' className='link'>our chefs</Link></p>
                <p><Link to='/' className='link'>contact</Link></p>
              </li>
            </ul>
          </div>
          <div className={classes.address_info}>

            <div className={classes.logo}>
              <Link><img src={logo} /></Link>
            </div>

            <div className={classes.location}>
              <ul>
                <li>
                  <p><Link to='/' className='link'>home</Link></p>
                  <p><Link to='/' className='link'>menus</Link></p>
                  <p><Link to='/' className='link'>about us</Link></p>
                  <p><Link to='/' className='link'>our chefs</Link></p>
                  <p><Link to='/' className='link'>contact</Link></p>
                </li>
              </ul>
            </div>

            <div className={classes.shape}>
              <AnimatedSquares />
            </div>

            <div className={classes.title}>
              <h2>
                Get News & Offers
              </h2>
              <p>
                Subscribe us & Get
                <span>
                  25% Off.
                </span>
              </p>
            </div>

            <div className={classes.action}>
              <Button>subscribe</Button>
              <div className={classes.input_group}>
                <input type="text" placeholder='Your email' />
                <MdOutlineEmail/>

              </div>
            </div>

          </div>
          <div className={classes.social}>
            <ul>
              <li>
                <p><Link to='/' className='link'>facebook</Link></p>
                <p><Link to='/' className='link'>instagram</Link></p>
                <p><Link to='/' className='link'>twitter</Link></p>
                <p><Link to='/' className='link'>youtube</Link></p>
                <p><Link to='/' className='link'>google map</Link></p>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.copy}>
          <p>
            &copy; 2023 Restaurt. All Rights Reserved | Crafted by <Link to=''>Hasnaa Elmasry</Link>
          </p>
        </div>

      </Container>

    </footer>
  )
}

export default Footer
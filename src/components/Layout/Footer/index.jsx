import { Link } from 'react-router-dom';
import AnimatedSquares from '../../AnimatedSquares';
import Container from '../../UI/Container';
import Button from '../../UI/Button';
import classes from './classes.module.scss';
import logo from '../../../assets/images/logo.png';
import { MdOutlineEmail } from 'react-icons/md';
import IconInput from '../../UI/IconInput';

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
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <p>
                <Link to=''>
                  booking@domainname.com
                </Link>
              </p>
              <p>
                <Link to=''>
                  Booking Request : +88-123-123456
                </Link>
              </p>
              <p>Open : 09:00 am - 01:00 pm</p>
            </div>

            <div className={classes.shape}>
              <AnimatedSquares />
            </div>

            <div className={classes.title}>
              <h3>
                Get News & Offers
              </h3>
              <p>
                Subscribe us & Get
                <span>
                  25% Off.
                </span>
              </p>
            </div>

            <div className={classes.action}>

              <IconInput
                icon={({ className }) => <MdOutlineEmail className={className} />}
                input={({ className }) => <input className={className} type="text" placeholder='Your email' />}
              />
              <Button style={classes.btn} variant='primary'>subscribe</Button>

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
            &copy; 2023 Restaurt. All Rights Reserved | Crafted by
            <span>
              <Link to=''>Hasnaa Elmasry</Link>
            </span>
          </p>
        </div>

      </Container>

    </footer >
  )
}

export default Footer
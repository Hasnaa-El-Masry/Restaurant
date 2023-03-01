import Container from '../../UI/Container';
import Image from '../../UI/Image';
import chef1 from '../../../assets/images/chef-1.jpg';
import chef2 from '../../../assets/images/chef-2.jpg';
import chef3 from '../../../assets/images/chef-3.jpg';
import SectionHeader from '../../UI/SectionHeader';
import classes from './classes.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineDribbble } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Team = () => {

  return (
    <section className={classes.team}>

      <Container>
        <SectionHeader
          title={<span>Meat Our Team</span>}
          subtitle={"experienced team"}
        />
        <div className={classes.content}>
          <div className={classes.item}>

            <div className={classes.image}>
              <img src={chef1} />
              <div className={classes.overlay}>

                <div className={classes.social}>
                  <ul>
                    <li>
                      <Link to=''><FaFacebookF /></Link>
                    </li>

                    <li>
                      <Link to=''><BsTwitter /></Link>
                    </li>

                    <li>
                      <Link to=''><AiFillLinkedin /></Link>
                    </li>

                    <li>
                      <Link to=''><AiOutlineDribbble /></Link>
                    </li>


                  </ul>
                </div>

              </div>
            </div>

            <div className={classes.item__content}>
              <h3>Willium Joe</h3>
              <span>MASTER CHEF</span>
              <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.image}>
              <img src={chef2} />

              <div className={classes.overlay}>

                <div className={classes.social}>
                  <ul>
                    <li>
                      <Link to=''><FaFacebookF /></Link>
                    </li>

                    <li>
                      <Link to=''><BsTwitter /></Link>
                    </li>

                    <li>
                      <Link to=''><AiFillLinkedin /></Link>
                    </li>

                    <li>
                      <Link to=''><AiOutlineDribbble /></Link>
                    </li>


                  </ul>
                </div>

              </div>
            </div>
            <div className={classes.item__content}>
              <h3>Steave Den</h3>
              <span>MASTER CHEF</span>
              <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.
              </p>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.image}>
              <img src={chef3} />
              <div className={classes.overlay}>

                <div className={classes.social}>
                  <ul>
                    <li>
                      <Link to=''><FaFacebookF /></Link>
                    </li>

                    <li>
                      <Link to=''><BsTwitter /></Link>
                    </li>

                    <li>
                      <Link to=''><AiFillLinkedin /></Link>
                    </li>

                    <li>
                      <Link to=''><AiOutlineDribbble /></Link>
                    </li>


                  </ul>
                </div>

              </div>
            </div>

            <div className={classes.item__content}>
              <h3>Lily Sopy</h3>
              <span>MASTER CHEF</span>
              <p>Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industrys.
              </p>
            </div>
          </div>
        </div>

      </Container>

    </section>
  )
}

export default Team
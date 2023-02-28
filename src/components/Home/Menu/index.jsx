import SectionHeader from '../../UI/SectionHeader';
import classes from './classes.module.scss';
import img1 from '../../../assets/images/menu-image-5.png';
import AnimatedSectionBg from '../../UI/AnimatedSectionBg';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import { useState } from 'react';
import { TbSquareRotated } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const tabs = ['Morning', 'WEEKDAY', 'LUNCH', 'DINNER'];
const dishes = [
  {
    title: 'Greek Salad',
    price: '25.20',
    desc: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.'
  },
  {
    title: 'Greek Salad',
    price: '25.20',
    desc: 'Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.'
  }
]

const Menu = () => {

  const [active, setActive] = useState();

  const changeActiveHandler = (indx) => {

    setActive(indx)

  }

  return (
    <AnimatedSectionBg styles='topLeft'>
      <Container className={classes.container}>
        <SectionHeader
          title={<span>Delicious Menu</span>}
          subtitle={"special selection"}
        />

        <div className={classes.content}>

          <div className={classes.menu}>

            <ul>
              {tabs.map((tab, indx) => (
                <li key={indx} className='title'>
                  <TbSquareRotated className='icon' />
                  <span onClick={() => changeActiveHandler(indx)} className={active === indx ? 'active' : ''}>{tab}</span>
                </li>
              ))}
            </ul>

          </div>

          <div className={`${classes.menu_items}`}>

            <div className={classes.col}>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <Link to=''>
                    <img src={img1} alt="" />
                  </Link>
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <img src={img1} alt="" />
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <img src={img1} alt="" />
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="divider"></div>

            <div className={classes.col}>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <img src={img1} alt="" />
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <img src={img1} alt="" />
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

              <div className={`${classes.item}`}>
                <div className={`${classes.img}`}>
                  <img src={img1} alt="" />
                </div>
                <div className={`${classes.content}`}>
                  <div className={`${classes.title_conatiner}`}>
                    <div className={`${classes.title}`}>
                      <h5>Greek Salad</h5>
                    </div>
                    <div className={`${classes.price}`}>
                      <span>$25.50</span>
                    </div>
                  </div>

                  <div className={`${classes.desc}`}>
                    <p>Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</p>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <div className={classes.timing_container}>
            <div className={classes.timing}>
              During winter daily from <span>7:00 pm</span> to <span>9:00 pm</span>            </div>
            <div className={classes.action}>
              <Button>View All Menu</Button>
            </div>
          </div>

        </div>
      </Container>
    </AnimatedSectionBg>
  )
}

export default Menu
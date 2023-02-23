import SectionHeader from '../../UI/SectionHeader';
import classes from './classes.module.scss';
import Container from '../../UI/Container';
import img1 from '../../../assets/images/offer-image-1.jpg';
import img2 from '../../../assets/images/offer-image-2.jpg';
import img3 from '../../../assets/images/offer-image-3.jpg';
import { Link } from 'react-router-dom';

const Offers = () => {

  return (
    <section className={classes.offers}>
        <Container className={classes.container}>
          <div className={classes.header}>

            <SectionHeader
              title={<span>We Offer Top Notch</span>}
              subtitle={"flavor for royalty"}
              description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever."}
            />
          </div>

          <div className={classes.items}>

            <div className={classes.offer__item}>
              <div className={classes.offer__item_img}>
                <img src={img1} alt="" />
              </div>
              <div className={classes.offer__item_title}>
                <h3>Breakfast</h3>
              </div>
              <div>
                <Link className='link' to='' >view menu</Link>
              </div>
            </div>


            <div className={classes.offer__item}>
              <div className={classes.offer__item_img}>
                <img src={img2} alt="" />
              </div>
              <div className={classes.offer__item_title}>
                <h3>Appetizers</h3>
              </div>
              <div >
                <Link className='link' to=''>view menu</Link>
              </div>
            </div>


            <div className={classes.offer__item}>
              <div className={classes.offer__item_img}>
                <img src={img3} alt="" />
              </div>
              <div className={classes.offer__item_title}>
                <h3>Drinks</h3>
              </div>
              <div>
                <Link className='link' to=''>view menu</Link>
              </div>
            </div>

          </div>
        </Container>
    </section>

  )
}

export default Offers
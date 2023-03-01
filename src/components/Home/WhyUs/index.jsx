import classes from './classes.module.scss';
import SectionHeader from '../../UI/SectionHeader';
import img1 from '../../../assets/images/strength-1.png';
import img2 from '../../../assets/images/strength-2.png';
import img3 from '../../../assets/images/strength-3.png';
import img4 from '../../../assets/images/strength-4.png';
import Container from '../../UI/Container';

const WhyUs = () => {

  return (
    <section className={classes.whyus}>
      <Container>

        <SectionHeader
          title={<span>Our Strength</span>}
          subtitle={"why choose us"}
        />

        <div className={classes.content}>

          <div className={classes.item}>
            <div className={classes.img}>
              <img src={img1} />
            </div>
            <div className={classes.title}>
              <h4>Hygienic Food</h4>
            </div>
            <div className={classes.desc}>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.img}>
              <img src={img2} />
            </div>
            <div className={classes.title}>
              <h4>Fresh Environment</h4>
            </div>
            <div className={classes.desc}>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.img}>
              <img src={img3} />
            </div>
            <div className={classes.title}>
              <h4>Fresh Environment</h4>
            </div>
            <div className={classes.desc}>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.img}>
              <img src={img4} />
            </div>
            <div className={classes.title}>
              <h4>Event & Party</h4>
            </div>
            <div className={classes.desc}>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>

        </div>  


      </Container>

    </section>
  )
}

export default WhyUs
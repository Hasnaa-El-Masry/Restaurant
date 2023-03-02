import Button from '../../UI/Button';
import Container from '../../UI/Container';
import SectionHeader from '../../UI/SectionHeader';
import img1 from '../../../assets/images/news-1.jpg';
import img2 from '../../../assets/images/news-2.jpg';
import img3 from '../../../assets/images/news-3.jpg';
import classes from './classes.module.scss';
import Image from '../../UI/Image';

const News = () => {

  return (
    <section className={classes.news}>
      <SectionHeader
        title={<span>Upcoming Events</span>}
        subtitle={"recent updates"}
      />
      <Container>

        <div className={classes.news}>

          <div className={classes.new}>

            <div className={classes.time_padge}>
              <span>08/09/2022</span>
            </div>

            <div className={classes.img}>
              <img src={img1} />
            </div>

            <div className={classes.content}>
              <span>food flavour</span>
              <h4>Flavour so good you'll try to eat with your eye. </h4>
            </div>

          </div>

          <div className={classes.new}>

            <div className={classes.time_padge}>
              <span>08/09/2022</span>
            </div>

            <div className={classes.img}>
              <img src={img2} />
            </div>

            <div className={classes.content}>
              <span>food flavour</span>
              <h4>Flavour so good you'll try to eat with your eye. </h4>
            </div>

          </div>

          <div className={classes.new}>

            <div className={classes.time_padge}>
              <span>08/09/2022</span>
            </div>

            <div className={classes.img}>
              <img src={img3} />
            </div>

            <div className={classes.content}>
              <span>food flavour</span>
              <h4>Flavour so good you'll try to eat with your eye. </h4>
            </div>

          </div>

        </div>

        <div className={classes.action}>
          <Button>view our blog</Button>
        </div>

      </Container>
    </section>
  )
}

export default News  
import Container from '../../UI/Container';
import SectionHeader from '../../UI/SectionHeader';
import Button from '../../UI/Button';
import img1 from '../../../assets/images/story1.jpg';
import img2 from '../../../assets/images/story2.png';
import stamp from '../../../assets/images/stamp.png';
import stampLayer from '../../../assets/images/stamp-layer.png';
import classes from './classes.module.scss';
import { Link } from 'react-router-dom';

const Story = () => {

  return (
    <section className={classes.story}>

      <Container className={classes.container}>

        <div className={classes.round_stamp}>
          <img src={stamp} alt='' />
        </div>

        <div className={classes.content}>

          <SectionHeader
            className={classes.title}
            title={<span>Every Flavor Tells<br /> a Story</span>}
            subtitle={"our story"}
            description={"Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into."}
          />

          <div className={classes.call}>
            <p> Book Through Call</p>
            <div className="d-flex justify-center">
              <Link className={`${classes.number} link`}>
                +80 (400) 123 4567
              </Link>
            </div>
          </div>

          <div className={classes.action}>
            <Button>Read More</Button>
          </div>

        </div>

        <div className={classes.image}>
          <img src={img1} alt="" />
          <div className={classes.layer_img}>
            <img src={img2} alt="" />
          </div>
        </div>

      </Container>
    </section >
  )
}

export default Story
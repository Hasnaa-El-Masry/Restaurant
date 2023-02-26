import SectionHeader from '../../UI/SectionHeader';
import img from "../../../assets/images/special-dish.jpg";
import classes from './classes.module.scss';
import Button from '../../UI/Button';
import Container from '../../UI/Container';
import { RiBookmark3Fill } from 'react-icons/ri'

const SpecialDish = () => {

  return (
    <section className={classes.special_dish}>

      <div className={classes.img}>
        <img src={img} alt="" />
      </div>

      <div className={classes.content}>

        <Container className={classes.content__container}>

          <div className={`${classes.icon} icon`}>
            <RiBookmark3Fill />
          </div>

          <div>
            <SectionHeader
              className={classes.header}
              title={<span>Lobster Tortellini</span>}
              subtitle={"Special Dish"}
              description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam unde vitae beatae sunt ipsam doloremque dignissimos inventore natus ratione dolores minima, hic exercitationem? Exercitationem, aliquid totam nobis necessitatibus ipsam inventore."}
            />

            <div className={classes.price}><span className={classes.old}>$40.00</span> <span className={classes.new}>$20.00</span></div>

            <div className={classes.action}>
              <Button>view all menu</Button>
            </div>
          </div>

        </Container>
      </div>
    </section>
  )
}

export default SpecialDish
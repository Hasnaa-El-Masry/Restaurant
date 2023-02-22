import classes from './classes.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/images/slider-1.jpg";
import slider2 from "../../../assets/images/slider-2.jpg";
import slider3 from "../../../assets/images/slider-3.jpg";
import Button from "../../UI/Button";
import SectionHeader from '../../UI/SectionHeader';

const Header = () => {

  return (
    <div className={classes.header}>
      <Swiper className="mySwiper" grabCursor>

        <SwiperSlide className={classes.slider__item}>

          <div className={classes.item_img}>
            <img src={slider1} alt="" />
          </div>
          <div className={classes.item_content}>

            <SectionHeader
              header
              title={<span>Where every flavor <br />tells a story</span>}
              subtitle={"delightful experience"}
              description={"Come with family & feel the joy of mouthwatering food"}
            />

            <div className={classes.action}>
              <Button>View our menu</Button>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className={classes.slider__item}>

          <div className={classes.item_img}>
            <img src={slider2} alt="" />
          </div>
          <div className={classes.item_content}>

            <SectionHeader
              header
              title={<span>Where every flavor <br />tells a story</span>}
              subtitle={"delightful experience"}
              description={"Come with family & feel the joy of mouthwatering food"}
            />

            <div className={classes.action}>
              <Button>View our menu</Button>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide className={classes.slider__item}>

          <div className={classes.item_img}>
            <img src={slider3} alt="" />
          </div>
          <div className={classes.item_content}>

            <SectionHeader
              header
              title={<span>Where every flavor <br />tells a story</span>}
              subtitle={"delightful experience"}
              description={"Come with family & feel the joy of mouthwatering food"}
            />

            <div className={classes.action}>
              <Button>View our menu</Button>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
    </div>


  )
}

export default Header
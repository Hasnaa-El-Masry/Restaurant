import classes from './classes.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import Button from "../UI/Button";
import { SectionHeaderContent } from '../UI/SectionHeader';

import { motion } from "framer-motion"

const Header = () => {

  return (
    <div className={classes.header}>
      <Swiper className="mySwiper" grabCursor>


        <SwiperSlide className={classes.slider__item}>

          {({ isActive }) => {

            return (<>
              <div className={classes.item_img}>
                <img src={slider2} alt="" />
              </div>

              <div className={classes.item_content}>

                <SectionHeaderContent
                  isActive
                  header
                  title={<span>Where every flavor <br />tells a story</span>}
                  subtitle={"delightful experience"}
                  description={"Come with family & feel the joy of mouthwatering food"}
                />

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1.7 }}
                  className={classes.action}>
                  <Button>View our menu</Button>
                </motion.div>

              </div>

            </>

            )

          }}

        </SwiperSlide>

        <SwiperSlide className={classes.slider__item}>

          {({ isActive }) => {

            return (<>
              <div className={classes.item_img}>
                <img src={slider2} alt="" />
              </div>

              <div
                className={classes.item_content}>

                <SectionHeaderContent
                  header
                  title={<span>Where every flavor <br />tells a story</span>}
                  subtitle={"delightful experience"}
                  description={"Come with family & feel the joy of mouthwatering food"}
                />

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1.7 }}
                  className={classes.action}>
                  <Button>View our menu</Button>
                </motion.div>

              </div>

            </>

            )

          }}

        </SwiperSlide>

        <SwiperSlide className={classes.slider__item}>

          {({ isActive }) => {

            return (<>
              <div className={classes.item_img}>
                <img src={slider2} alt="" />
              </div>

              <div
                className={classes.item_content}>

                <SectionHeaderContent
                  header
                  title={<span>Where every flavor <br />tells a story</span>}
                  subtitle={"delightful experience"}
                  description={"Come with family & feel the joy of mouthwatering food"}
                />

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 100 }}
                  transition={{ duration: 1, delay: 1.7 }}
                  className={classes.action}>
                  <Button>View our menu</Button>
                </motion.div>

              </div>

            </>

            )

          }}

        </SwiperSlide>


      </Swiper>
    </div>


  )
}

export default Header
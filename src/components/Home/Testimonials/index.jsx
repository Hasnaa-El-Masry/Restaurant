import classes from './classes.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img_1 from "../../../assets/images/testi-1.jpg";
import Container from "../../UI/Container";
import img_2 from "../../../assets/images/testi-2.jpg";
import img_3 from "../../../assets/images/testi-3.jpg";
import { RiDoubleQuotesR } from 'react-icons/ri'
import { TbSquareRotated } from 'react-icons/tb'

const avatars = [img_1,img_2,img_3];

const Testimonials = () => {
  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <Container>
          <Swiper
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<img src=' + img_1 + '/><h6>Sam Jhonson</h6>' + "</span>";
              },
            }}
            modules={[Pagination]}
            className={`${classes.slide} testimonials`}

          >
            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <quote>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</quote>
              <div className={classes.squares}>
                <TbSquareRotated />
                <TbSquareRotated />
                <TbSquareRotated />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <quote>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</quote>
              <div className={classes.squares}>
                <TbSquareRotated />
                <TbSquareRotated />
                <TbSquareRotated />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <quote>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</quote>
              <div className={classes.squares}>
                <TbSquareRotated />
                <TbSquareRotated />
                <TbSquareRotated />
              </div>
            </SwiperSlide>

          </Swiper>
        </Container>
      </div>
    </section>
  )
}

export default Testimonials
import classes from "./classes.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img_1 from "../../../assets/images/testi-1.jpg";
import Container from "../../UI/Container";
import { RiDoubleQuotesR } from "react-icons/ri";
import AnimatedSquares from "../../UI/AnimatedSquares";

const Testimonials = () => {
  return (
    <section className={classes.testimonials}>
      <div className={classes.container}>
        <Container>
          <Swiper
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' +
                  className +
                  '">' +
                  "<img src=" +
                  img_1 +
                  "/><h6>Sam Jhonson</h6>" +
                  "</span>"
                );
              },
            }}
            modules={[Pagination]}
            className={`${classes.slide} testimonials`}
          >
            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <q>
                I wanted to thank you for inviting me down for that amazing
                dinner the other night. The food was extraordinary.
              </q>

              <div>
                <AnimatedSquares />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <q>
                I wanted to thank you for inviting me down for that amazing
                dinner the other night. The food was extraordinary.
              </q>

              <div>
                <AnimatedSquares />
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.quote_container}>
              <RiDoubleQuotesR className={classes.quote_mark} />
              <q>
                I wanted to thank you for inviting me down for that amazing
                dinner the other night. The food was extraordinary.
              </q>

              <div>
                <AnimatedSquares />
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </section>
  );
};

export default Testimonials;

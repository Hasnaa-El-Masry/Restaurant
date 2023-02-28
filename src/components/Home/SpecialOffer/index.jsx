import SectionHeader from '../../UI/SectionHeader';
import Container from '../../UI/Container';
import classes from './classes.module.scss';
import img3 from '../../../assets/images/dish3.jpg';
import Image from '../../UI/Image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Button from '../../UI/Button';

const SpecialOffer = () => {

  return (
    <section className={classes.special_offer}>

      <div className={classes.header}>

        <SectionHeader
          title={<span>Best Specialties</span>}
          subtitle={"special offer"}
        />

      </div>

      <div className={classes.content}>
        <Container>
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className={classes.slider}
          >
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={classes.slide}>
              <div className={classes.slide_item}>
                <Image src={img3} style={classes.img} />
                <div className={classes.title}>
                  <h4>Tokusen Wagyu</h4>
                </div>
                <div className={classes.desc}>
                  <p>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</p>
                </div>
                <div className={classes.price}>
                  <h5>$12.00</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>


        </Container>


      </div>

      <div className={classes.action}>
        <Button>View All Menu</Button>
      </div>

    </section>

  )
}

export default SpecialOffer
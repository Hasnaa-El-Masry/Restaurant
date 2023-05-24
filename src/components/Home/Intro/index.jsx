import Container from "../../UI/Container";
import SectionHeader from "../../UI/SectionHeader";
import AnimatedSquares from "../../UI/AnimatedSquares";
import classes from "./classes.module.scss";
import Modal from "../../UI/Modal";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";

const Intro = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={classes.intro}>
      <SectionHeader
        title={<span>Watch Our Video</span>}
        subtitle={"amazing experience"}
      />

      <Container className={classes.container}>
        <div className={classes.video}>
          <div className={classes.play_btn} onClick={() => setOpen(true)}>
            <FiPlay />
          </div>
        </div>

        <div className={classes.shape}>
          <AnimatedSquares />
        </div>

        <div className={classes.content}>
          <h3>
            A modern restaurant with a menu that will make your mouth water.
          </h3>
          <span>WILLIUM JOE - MASTER CHEF</span>
        </div>

        <div className={classes.fact_counter}>
          <div className={classes.facts}>
            <div className={classes.fact}>
              <div className={classes.fact_count}>
                <span>150</span>
                <AiOutlinePlus />
              </div>
              <div className={classes.fact_text}>
                DAILY <br />
                ORDER
              </div>
            </div>

            <div className={classes.fact}>
              <div className={classes.fact_count}>
                <span>150</span>
                <AiOutlinePlus />
              </div>
              <div className={classes.fact_text}>
                DAILY <br />
                ORDER
              </div>
            </div>

            <div className={classes.fact}>
              <div className={classes.fact_count}>
                <span>150</span>
                <AiOutlinePlus />
              </div>
              <div className={classes.fact_text}>
                DAILY <br />
                ORDER
              </div>
            </div>

            <div className={classes.fact}>
              <div className={classes.fact_count}>
                <span>150</span>
                <AiOutlinePlus />
              </div>
              <div className={classes.fact_text}>
                DAILY <br />
                ORDER
              </div>
            </div>
          </div>
        </div>
      </Container>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <iframe
            title="restautrant video"
            width="100%"
            style={{ height: "100%" }}
            src="//www.youtube.com/embed/ZETY_l3GVQg?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;wmode=transparent&amp;enablejsapi=1&amp;html5=1"
          ></iframe>
        </Modal>
      )}
    </section>
  );
};

export default Intro;

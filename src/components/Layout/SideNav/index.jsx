import React, { useContext, useEffect, useState } from "react";
import styles from "./classes.module.scss";
import Logo from "../../../components/Logo";
import Container from "../../../components/UI/Container";
import { Link } from "react-router-dom";
import { TbSquareRotated } from "react-icons/tb";

const SideNav = ({ show }) => {
  return (
    <div className={`${styles.side_nav} ${show ? styles.show : styles.hide}`}>
      <Container>
        <Logo className={styles.logo} />
        <div className={styles.menu}>
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link to="/" className={styles.menu__item__link}>
                <TbSquareRotated className={styles.menu__item__icon} />
                <span>home</span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="/menu" className={styles.menu__item__link}>
                <TbSquareRotated className={styles.menu__item__icon} />
                <span>menus</span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="/about" className={styles.menu__item__link}>
                <TbSquareRotated className={styles.menu__item__icon} />
                <span>about</span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="/chefs" className={styles.menu__item__link}>
                <TbSquareRotated className={styles.menu__item__icon} />
                <span>our chefs</span>
              </Link>
            </li>

            <li className={styles.menu__item}>
              <Link to="/contact" className={styles.menu__item__link}>
                <TbSquareRotated className={styles.menu__item__icon} />
                <span>contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.info}>
          <h2>Visit Us</h2>

          <div className={styles.info_content}>
            <p>Restaurant St, Delicious City, London 9578, UK </p>
            <p>Open: 9.30 am - 2.30pm</p>
            <p>booking@domainame.com</p>
          </div>

          <TbSquareRotated className={styles.divider} />

          <div className={styles.booking}>
            <h5>Booking request</h5>
            <Link className="link">+88-123-123456</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SideNav;

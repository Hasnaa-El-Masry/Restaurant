import React from 'react'
import classes from './classes.module.scss'

import ContactUs from './ContactUs'
import Header from './Header'
import Intro from './Intro'
import Menu from './Menu'
import News from './News'
import Offers from './Offers'
import SpecialDish from './SpecialDish'
import SpecialOffer from './SpecialOffer'
import Story from './Story'
import Team from './Team'
import Testimonials from './Testimonials'
import WhyUs from './WhyUs'


const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Offers/>
        <Story/>
        <section><SpecialDish/></section>
        <section><Menu/></section>
        <section><SpecialOffer/></section>
        <section><Testimonials/></section>
        <section><ContactUs/></section>
        <section><WhyUs/></section>
        <section><Team/></section>
        <section><Intro/></section>
        <section><News/></section>
      </main>
    </>
  )
}

export default Home
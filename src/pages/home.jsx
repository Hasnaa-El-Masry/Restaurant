import ContactUs from "../components/Home/ContactUs";
import Header from "../components/Header";
import Intro from "../components/Home/Intro";
import Menu from "../components/Home/Menu";
import News from "../components/Home/News";
import Offers from "../components/Home/Offers";
import SpecialDish from "../components/Home/SpecialDish";
import SpecialOffer from "../components/Home/SpecialOffer";
import Story from "../components/Home/Story";
import Team from "../components/Home/Team";
import Testimonials from "../components/Home/Testimonials";
import WhyUs from "../components/Home/WhyUs";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Offers />
        <Story />
        <SpecialDish />
        <Menu />
        <SpecialOffer />
        <Testimonials />
        <ContactUs />
        <WhyUs />
        <Team />
        <Intro />
        <News />
      </main>
    </>
  );
};

export default Home;

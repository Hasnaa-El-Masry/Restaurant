import Container from "../components/UI/Container";
import PageHeader from "../components/UI/PageHeader";
import bgSrc from "../assets/images/about-header.jpg";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" subtitle="Our Story" src={bgSrc} />
      <Container>
        <main>
          <section>who we are</section>
          <section>Staistics</section>
          <section>About info 1</section>
          <section>About info 2</section>
          <section>Our Services</section>
          <section>Testimonials</section>
          <section>Why choose us</section>
          <section>Restaurant gallery slider</section>
        </main>
      </Container>
    </>
  );
};

export default AboutUs;

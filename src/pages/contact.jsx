import Container from "../components/UI/Container";
import PageHeader from "../components/UI/PageHeader";
import bgSrc from "../assets/images/contact-header.jpg";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Any Query ?" src={bgSrc} />

      <Container>
        <main>
          <section>map</section>
          <section>message us</section>
        </main>
      </Container>
    </>
  );
};

export default Contact;
